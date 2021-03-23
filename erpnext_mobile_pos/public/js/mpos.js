$(window).on('load', page_changed);


function page_changed(event)
{
    frappe.after_ajax(function () 
    {
        // creates a button to toggle item-cart and pos-cart

        var button_order = document.createElement('button');            // creates a button
        button_order.innerHTML = 'Show/Hide Order';                     // assign name of button
        button_order.classList.add('btn' ,'btn-primary','order');                       // assign a class for button
        button_order.onclick = function () {                            // onclick of button, item-cart and pos cart toggles
        $(".pos-cart").fadeToggle("3000");      
        }
        var button_bar = document.createElement("DIV");                 // created a div
        button_bar.appendChild(button_order);                           // button is appended to the div
        button_bar.classList.add("button-bar");                         // assigned a class for div
        let pos = $('.pos');
        if($('.button-bar').length == 0){
            pos.prepend(button_bar);                
        }

        // creates a button for pay in mobile pos

        var totalElm = document.createElement('DIV');                   // a div is created
        totalElm.classList.add('col-8')                                 // class is assigned to the div
        var button_pay = document.createElement('button');              // created a button
        button_pay.innerHTML = 'Pay';                                   // assign name of button
        button_pay.classList.add('btn', 'btn-primary','pay');                              // assigned a class for button
        let pos_pay = $('div.num-col.brand-primary');
        button_pay.onclick = function () {                              // on click of mobile pos pay, pay button of pos is clicked and route into payments.

            $('div.num-col.brand-primary').click();
            console.log('paid');   

        }
        
        var bottom_toolbar = document.createElement("DIV");
        bottom_toolbar.appendChild(totalElm)
        bottom_toolbar.appendChild(button_pay)
                   
        bottom_toolbar.classList.add("fixed-bottom");
        bottom_toolbar.classList.add("row");
        bottom_toolbar.classList.add("col-12");

        pos.append(bottom_toolbar);

        let itemSelect = document.querySelector('.pos-items-wrapper');
        
        let mposAmount = document.querySelector('.col-8');
        let roundTotal = document.querySelector('.rounded-total-value')

        window.setInterval( function() {
        let totalAmount = document.querySelector('.grand-total-value');
        mposAmount.innerText =  totalAmount.textContent;
        },100);
    })
}