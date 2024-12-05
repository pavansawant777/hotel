express = require('express')
app = express()
cors = require('cors')
fs = require('fs')
bodyparser = require('body-parser')
upload = require("express-fileupload")
execute = require('./Connection.js')
app.use(cors())
app.use(express.static("public/"))
app.use(upload())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json());
jwt = require('jsonwebtoken')
bcrypt = require('bcryptjs')
cookieParser = require("cookie-parser")
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

const db = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'hotels',
    // port:3306
});


app.get('/', async (req, res) => {
    res.render('index.ejs', { about: await execute(`select * from about_us where status='active' limit 1`) })
    // res.send("hey")
})

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send('No token provided.');
        // return res.json({Status:"Failed"})

    }
    jwt.verify(token, 'sarthak', (err, decoded) => {
        if (err) {
            // return res.json({Status:"Failed"})
            return res.status(500).send('Failed to authenticate token.');
        }
        req.userId = decoded.id;
        next();
    });
};

app.get('/verifyToken', verifyToken, (req, res) => {
    res.status(200).send({ authenticated: true });
});
app.post('/register', async (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) return res.json({ Status: 'Failed' });
    console.log(req.body);
    var d = req.body;
    var sql = `insert into users(username,email,password) values('${d.username}','${d.email}','${d.password}')`;
    db.query(sql, function (err, data) {
        if (err) res.json({ Errors: 'Error inserting Data in Server' });
        else res.json({ Status: 'Success' });
        return;
    });
    return;
});
app.post('/login', async (req, res) => {
    var { username, password } = req.body;
    console.log(req.body)
    const data = await execute(`select * from users where username="${username}" and password="${password}" order by u_id desc limit 1`);
    if (data.length == 1) {
        const token = jwt.sign({ id: data[0].u_id }, 'sarthak');
        res.json({ token });
    } else {
        res.json({ Error: 'Invalid login credentials' });
    }
});
// FRONTEND API
app.get("/getAvailableTables/:size", async (req, res) => {
    res.send(await execute(`select * from tables LEFT JOIN TABLE_CATEGORIES ON TABLES.TABLE_CATEGORY=TABLE_CATEGORIES.CAT_ID where capacity >'${req.params.size}' `))
})
app.post("/book_table/:t_id/:t_cat/:token/:requirement", async (req, res) => {
    // res.send(req.params);return
    jwt.verify(req.params.token, 'sarthak', (err, decoded) => {
        if (err) {
            return res.status(500).send('Failed to authenticate token.');
        }
        req.userId = decoded.id;
    });
    const customer = (await execute(`select * from users where u_id="${req.userId}" order by u_id desc limit 1`))[0]
    if (customer.length < 1) return res.json({ Status: "Failed" })
    var { username, email, u_id } = customer
    const cust = await execute("insert into customers(customer_name,u_id,email,isonline,table_number,table_category,requirement,total,price)values(?,?,?,?,?,?,?,?,?)", [username, u_id, email, "yes", req.params.t_id, req.params.t_cat, req.params.requirement, 0, 0])
    await execute(`update tables set is_available='no' where id="${req.params.t_id}"`)
    return res.json({ Status: "Table Booked", user: cust.insertId });
})
app.get("/getMenuItems", async (req, res) => {
    res.json(await execute("select * from menu left join menu_categories on menu.dish_category=menu_categories.cat_id where menu.status='active'"))
})
app.post("/orderItem/:id/:token", async (req, res) => {
    jwt.verify(req.params.token, 'sarthak', (err, decoded) => {
        if (err) {
            return res.status(500).send('Failed to authenticate token.');
        }
        req.userId = decoded.id;
    });
    // user = await execute(`select *  from users where u_id="${req.userId}" order by users.u_id desc limit 1`)
    item = (await execute(`select * from menu left join menu_categories on menu.dish_category=menu_categories.cat_id where menu.id="${req.params.id}"`))[0]
    // console.log(item);return
    customer = (await execute(`select * from customers where u_id="${req.userId}" order by c_id desc limit 1`))[0]
    // console.log(ord);return
    try {

        ord = await execute(`select * from orders_ where customer_id="${customer.c_id}" and menu_id="${req.params.id}" order by order_id desc limit 1`)
        if (ord.length > 0) {
            await execute(`update orders_ set quantity='${ord[0].quantity + 1}', status='repeat' where order_id='${ord[0].order_id}'`)
        } else throw Error("TMKC")
    } catch (e) {
        await execute(`insert into orders_(u_id,customer_id,menu_item,price,quantity,table_number,menu_id)values(?,?,?,?,?,?,?)`,
            [req.userId, customer.c_id, item.dish_name, item.dish_price, 1, customer.table_number, item.id])
    }
    return res.json({ Status: "Requested", Customer: customer.c_id })
})
app.get("/OrderPlaced/:id", async (req, res) => {
    res.json(await execute(`select * from orders_ where customer_id="${req.params.id}"`))
})
app.get("/getCurrent/:token", async (req, res) => {
    // let sql = "";
    // console.log(req.params)
    // return res.send(req.params.token)
    jwt.verify(req.params.token, 'sarthak', (err, decoded) => {
        if (err) {
            //         return res.status(500).send('Failed to authenticate token.');
        }
        req.userId = decoded.id
        //     // return res.json({u_id:decoded.id})
        //     // sql = `select * from customers where customers.u_id="${req.userId}" order by c_id desc limit 1`
        //     // console.log(decoded, "MISAL", sql)
    });
    // console.log(sql, "SARTHAK")
    const user = (await execute(`select * from customers where customers.u_id="${req.userId}" order by c_id desc limit 1`))
    return user.length < 1 ? res.json({ u_id: req.userId }) : res.json({ u_id: user[0].c_id })
})
app.get("/getOriginal/:token", async (req, res) => {
    jwt.verify(req.params.token, 'sarthak', (err, decoded) => {
        if (err) {
            return res.status(500).send('Failed to authenticate token.');
        }
        // req.userId = decoded.id
        return res.json({ u_id: decoded.id })
    });
})
app.post("/checkOut/:c_id", async (req, res) => {
    try {
        // console.log(req.body,req.params)
        // res.send(req.body)
        const customer = (await execute(`select * from customers left join table_categories on customers.table_category=table_categories.cat_id where c_id="${req.params.c_id}"`));
        var { u_id, customer_name, email, isonline, table_number, cat_name, } = customer[0]
        const orders = await execute(`select * from orders_ where customer_id="${req.params.c_id}"`)
        var menu_item = "", price = "", quantity = "", total = 0;
        orders.map(ele => {
            total += ele.price * ele.quantity
            menu_item += ele.menu_item + ","
            price += ele.price + ","
            quantity += ele.quantity + ","
        })
        // console.log(customer_name, email, isonline, table_number, cat_name, total, menu_item, price, "unpaid", quantity)
        // sql =`insert into customer_name,email,was_online,table_number,table_cagtegory,price_paid,items_ordered,item_prices,status,quantity values("${customer_name}","${email}","${isonline}","${table_number}","${cat_name}","${total}","${menu_item}","${price}","${'unpaid'}","${quantity}")`
        billu = await execute('insert into bills(user_id,customer_name,email,was_online,table_number,table_category,price_paid,items_ordered,item_prices,status,quantity)values(?,?,?,?,?,?,?,?,?,?,?)', [u_id, customer_name, email, isonline, table_number, cat_name, total, menu_item, price, "unpaid", quantity])
        // console.log(`insert into bills(user_id,customer_name,email,was_online,table_number,table_category,price_paid,items_ordered,item_prices,status,quantity)values(?,?,?,?,?,?,?,?,?,?,?)`, [u_id, customer_name, email, isonline, table_number, cat_name, total, menu_item, price, "unpaid", quantity])
        // console.log(sql)
        await execute(`update tables set is_available='yes' where table_number="${table_number}"`)
        await execute(`delete from customers where c_id="${req.params.c_id}"`)
        await execute(`delete from orders_ where customer_id="${req.params.c_id}"`)
        return res.json({ Status: "Kindly Pay Bill", c_id: req.params.c_id, bill: "billu.insertId" })
    } catch (e) {
        console.log(e)
        res.json({ Status: "Something went Wrong" })
    }
})
app.get("/getBills/:id", async (req, res) => {
    return res.json(await execute(`select * from bills where user_id="${req.params.id}"`))
})
app.get("/payNow/:b_id",async(req,res)=>{
    await execute(`update bills set status="paid" where bill_id="${req.params.b_id}"`)
    return res.json({Status:"Payment Done"})
})
app.get("/getBillItem/:b_id",async(req,res)=>{
    return res.json(await execute(`select * from bills where bill_id="${req.params.b_id}"`))
})





app.post("/update_about/:id", async (req, res) => {
    var { name, mobile, email, address, logo } = req.body
    if (req.files && req.files.logo) {
        fs.unlink("public/uploads/" + logo, (err) => console.log("Deleting logo SARTHAK ", err))
        logo = Date.now() + req.files.logo.name
        req.files.logo.mv("public/uploads/" + logo)
    }
    await execute(`update about_us set name="${name}",mobile="${mobile}",email="${email}",address="${address}",logo="${logo}" where id="${req.params.id}"`)
    return res.redirect("/")
})
app.get("/table_categories", async (req, res) => {
    // res.send(await execute("select * from table_categories"))
    res.render("table_categories.ejs", { "categories": await execute("select * from table_categories where status='active'") })
})
app.post("/save_category", async (req, res) => {
    await execute(`insert into table_categories(cat_name)values("${req.body.cat_name}")`)
    return res.redirect("/table_categories")
})
app.get("/delete_category/:id", async (req, res) => {
    await execute(`update table_categories set status='inactive' where cat_id="${req.params.id}"`)
    return res.redirect('/categories')
})
app.post("/update_category/:id", async (req, res) => {
    await execute(`update table_categories set cat_name="${req.body.cat_name}" where cat_id=?`, [req.params.id])
    return res.redirect("/table_categories")
})

app.get("/edit_category/:id", async (req, res) => {
    res.render("edit_category.ejs", { "category": await execute("select * from table_categories where cat_id=?", [req.params.id]) })
})

app.get("/menu_categories", async (req, res) => {
    res.render("menu_categories.ejs", { "categories": await execute("select * from menu_categories where status='active'") })
})
app.post("/save_menu_category", async (req, res) => {
    await execute(`insert into menu_categories(cat_name)values("${req.body.cat_name}")`)
    return res.redirect("/menu_categories")
})
app.get('/edit_menu_categories/:id', async (req, res) => {
    data = await execute(`select * from menu_categories where cat_id="${req.params.id}" and status='active'`)
    res.render("edit_menu_categories.ejs", { data: data })
})
app.post("/update_menu_category/:id", async (req, res) => {
    await execute(`update menu_categories set cat_name="${req.body.cat_name}" where cat_id="${req.params.id}"`)
    return res.redirect('/menu_categories')
})
app.get('/add_items', async (req, res) => {
    res.render("add_items.ejs", { categories: await execute(`select * from menu_categories where status='active'`), category: await execute("select * from menu where menu.status='active'") })
})
app.post("/save_menu", async (req, res) => {
    filename = ""
    var { dish_name, dish_category, dish_price, dish_contents } = req.body
    data = (await execute(`insert into menu(dish_name, dish_category, dish_price, dish_contents,dish_image)values(?,?,?,?,?)`, [dish_name, dish_category, dish_price, dish_contents, filename]))
    if (req.files) {
        filename = Date.now() + req.files.dish_image.name
        req.files.dish_image.mv("public/uploads/" + filename)
        await execute(`update menu set dish_image="${filename}" where id="${data.insertId}"`)
    }
    return res.redirect("/add_items")
})
app.get("/delete_menu/:id", async (req, res) => {
    await execute(`update menu set status='inactive' where id='${req.params.id}'`)
    res.redirect("/manage_menu")
})
app.get("/edit_menu/:id", async (req, res) => {
    res.render("edit_menu.ejs", { categories: await execute("select * from menu_categories where status='active'"), item: await execute(`select * from menu where id='${req.params.id}'`) })
})
app.get("/manage_menu", async (req, res) => {
    res.render("menu.ejs", { menu: await execute(`select * from menu where status='active'`), category: await execute("select * from menu_categories where status='active'") })
})
app.post("/update_menu/:id", async (req, res) => {
    var { dish_name, dish_category, dish_price, dish_contents, dish_image } = req.body
    filename = dish_image
    if (req.files && req.files.dish_image) {
        filename = Date.now() + req.files.dish_image.name
        req.files.dish_image.mv("public/uploads/" + filename)
        fs.unlink("public/uploads/" + dish_image, (err) => console.log(err, "Error Deleting"))
        // await execute(`update menu set dish_image="${filename}" where id="${req.params./id}"`)
    }
    await execute(`update menu set dish_image=?,dish_name=?, dish_category=?, dish_price=?, dish_contents=? where id=?`, [filename, dish_name, dish_category, dish_price, dish_contents, req.params.id])
    return res.redirect("/manage_menu")
})
app.get("/add_table", async (req, res) => {
    res.render("add_table.ejs", { categories: await execute("select * from table_categories where status='active'") })
})
app.post("/save_table", async (req, res) => {
    var { table_number, table_category, capacity, price_per, is_available } = req.body
    data = await execute("select * from tables where table_number=?", [table_number])
    if (data.length > 0) {
        res.send("<script>alert('Table Already Exists');location.href='/add_table'</script>")
        return
    }
    await execute(`insert into tables( table_number, table_category, capacity, price_per, is_available)values(?,?,?,?,?)`, [table_number, table_category, capacity, price_per, is_available])
    return res.redirect("/add_table")
})
app.get("/tables", async (req, res) => {
    res.render("tables.ejs", { tables: await execute("select * from tables,table_categories where tables.status='active' and table_categories.cat_id=tables.table_category") })
})
app.get("/edit_tables/:id", async (req, res) => {
    // res.send()
    res.render("edit_tables.ejs", { table: await execute("select * from tables left join table_categories on table_categories.cat_id=tables.table_category where tables.id=?", [req.params.id]), categories: await execute("select * from table_categories where status='active'") })
})
app.post("/update_table/:id", async (req, res) => {
    // res.send(req.body)
    var { table_category, capacity, price_per, is_available } = req.body
    await execute("update tables set table_category=?, capacity=?, price_per=?, is_available=? where id=?", [table_category, capacity, price_per, is_available, req.params.id])
    return res.redirect("/tables")
})
app.get("/delete_tables/:id", async (req, res) => {
    await execute("update tables set status='inactive' where id=?", [req.params.id])
    return res.redirect("/tables")
})
app.get("/admit_customer", async (req, res) => {
    res.render("admit_customer.ejs", { categories: await execute("select * from table_categories where status='active'") })
})
app.get("/pending_customers", async (req, res) => {
    // res.send();return;
    res.render("pending_customers.ejs", { pending: await execute("select * from pending_customers left join table_categories on pending_customers.table_category=table_categories.cat_id where pending_customers.status='waiting'") })
})
// API's
app.get("/isTableAvailable/:typo/:persons", async (req, res) => {
    // console.log(req.params)
    data = await execute("select * from tables where is_available='yes' and table_category=?", [req.params.typo])
    console.log(data);
    var available = "Unavailable"
    var minimum = -1
    var price = 0
    var capacity = 999
    if (data.length > 0) {
        for (i = 0; i < data.length; i++) {
            if (data[i].capacity >= req.params.persons) {
                available = "Available"
                if (capacity > data[i].capacity) {
                    minimum = data[i].table_number
                    capacity = data[i].capacity
                    price = data[i].price_per
                }
            }
        }
        console.log({ isAvailable: available, tableNo: minimum, price_per: price })
        res.json({ isAvailable: available, tableNo: minimum, price_per: price }); return;
    }
    console.log({ isAvailable: available, tableNo: minimum, price_per: price })
    res.json({ isAvailable: available, tableNo: minimum, price_per: price }); return;
})
//API
app.get("/getMenuItem/:category", async (req, res) => {
    res.json(await execute(`select * from menu where menu.dish_category="${req.params.category}"`))
})
//API
app.get("/getMenuList/:id", async (req, res) => {
    res.json(await execute(`select * from orders left join menu on menu.id=orders.menu_item 
        right join pending_customers on pending_customers.id="${req.params.id}" where customer_id="${req.params.id}"`))
})
//API
app.get("/setPrice/:price/:id", async (req, res) => {
    await execute(`update pending_customers set price="${req.params.price}" where id="${req.params.id}"`)
    res.send("Price Updated")
})
app.post("/admit_customer", async (req, res) => {
    var { customer_name, isonline, table_number, table_category, requirement, total, email } = req.body
    await execute(`insert into pending_customers(customer_name,isonline,table_number,table_category,requirement,total,email)values("${customer_name}", "${isonline}", "${table_number}", "${table_category}", "${requirement}", "${total}","${email}")`)
    await execute(`update tables set is_available='no' where table_number="${table_number}"`)
    return res.redirect("/admit_customer")
})
app.get("/serve_customer/:id", async (req, res) => {
    await execute(`update pending_customers set status='serving' where id="${req.params.id}"`)
    return res.redirect("/serve_customers")
})
app.get("/serve_customers", async (req, res) => {
    res.render("serve_customers.ejs", { pending: await execute("select * from pending_customers left join table_categories on pending_customers.table_category=table_categories.cat_id where pending_customers.status='serving'"), categories: await execute(`select * from menu_categories where status='active'`) })
})
app.post("/serve_item/:customer_id/:table_number", async (req, res) => {
    var { menu_item, quantity } = req.body
    if (menu_item == undefined || quantity == undefined) { res.send("<script>alert('Fill Details properly');location.href='/serve_customers'</script>"); return; }
    // res.send(req.body);return;
    await execute(`insert into orders(customer_id,menu_item,quantity,table_number)values("${req.params.customer_id}","${menu_item}", "${quantity}","${req.params.table_number}")`)
    // res.send(typeof(menu_item))
    return res.redirect("/serve_customers")
})
app.get("/unpaid/:c_id/:t_id", async (req, res) => {
    // res.send(req.params)
    await execute(`update pending_customers set status='unpaid' where id="${req.params.c_id}"`)
    await execute(`update tables set is_available='yes' where table_number='${req.params.t_id}'`)
    res.redirect("/billings")
})
app.get("/billings", async (req, res) => {
    // data = await execute(`select * from pending_customers where status='unpaid'`)
    // for (i = 0; i < data.length; i++) {
    //     price=0
    //     piece = await execute(`select * from pending_customers 
    //         right join orders on pending_customers.id=orders.customer_id left join menu on menu.id=orders.menu_item  where pending_customers.id="${data[i].id}"`)
    //         console.log(piece.length)
    //         for(j=0;j<piece.length;j++){
    //         price+=piece[j].quantity*piece[j].dish_price
    //     }
    //     data[i].price=price
    // }
    res.render("billings.ejs", { customers: await execute(`select * from pending_customers where status='unpaid'`) });
})
app.get("/make_payment/:id", async (req, res) => {
    // res.send(await execute(`select * from pending_customers,orders,menu where pending_customers.id=orders.customer_id and orders.menu_item=menu.id and pending_customers.id="${req.params.id}"`));return;
    data = await execute(`select * from pending_customers,orders,menu where pending_customers.id=orders.customer_id and orders.menu_item=menu.id and pending_customers.id="${req.params.id}"`)
    var { customer_name, isonline, table_number, total, price, email } = data[0]
    items_ordered = ""; quantity = ""; item_prices = ""
    for (i = 0; i < data.length; i++) {
        items_ordered += data[i].dish_name + ","
        item_prices += data[i].dish_price + ","
        quantity += data[i].quantity + ","
    }
    await execute(`insert into bills(customer_name,was_online,table_number,price_paid,items_ordered,item_prices,quantity,email)values(?,?,?,?,?,?,?,?)`, [customer_name, isonline, table_number, Number(price) + Number(total), items_ordered, item_prices, quantity, email])
    await execute(`delete from pending_customers where id="${req.params.id}"`)
    await execute(`delete from orders where customer_id="${req.params.id}"`)
    return res.redirect("/see_bills")
})
// app.get("/start_payment/:customer_id", async (req, res) => {
//     res.send(await execute(`select * from pending_customers right join orders on pending_customers.id=orders.customer_id
//     left join menu on menu.id=orders.menu_item
//     where orders.status='unpaid' and pending_customers.id="${req.params.customer_id}"`))
// })
app.get("/view_order/:id", async (req, res) => {
    // res.send(await execute(`select * from pending_customers`));return
    // res.send(await execute(`select * from pending_customers,orders,menu where pending_customers.id=orders.customer_id and orders.menu_item=menu.id and pending_customers.id="${req.params.id}"`));return
    res.render("view_order.ejs", { about: await execute("select * from about_us where status='active' limit 1"), order: await execute(`select * from pending_customers,orders,menu where pending_customers.id=orders.customer_id and orders.menu_item=menu.id and pending_customers.id="${req.params.id}"`) })
})
app.get("/see_bills", async (req, res) => {
    res.render("bills.ejs", { bills: await execute('select * from bills') })
})
app.get("/view_bill/:id", async (req, res) => {
    // res.send({ res: await execute(`select * from bills where status='active' and bill_id='${req.params.id}'`), ab: await execute("select * from about_us where status='active'") });return
    res.render("view_bill.ejs", { bills: await execute(`select * from bills where status='active' and bill_id='${req.params.id}'`), about: await execute("select * from about_us where status='active'") })
})
// FRONTEND API's
app.get("/get_table_types", async (req, res) => {
    res.json(await execute("select * from table_categories where status='active'"))
})
app.listen(process.env.PORT || 5000, () => console.log("running on port", process.env.PORT || 5000))