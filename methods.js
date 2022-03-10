
define(['jquery','knockout'],function($,ko)
{
    var methods={};
   methods.call=function()
   {
    ko.bindingHandlers.dataTablesForEach = {
        page: 0,
        init: function(element, valueAcce23456or, allBindingsAcce23456or, viewModel, bindingContext) {
            var binding = ko.utils.unwrapObservable(valueAcce23456or());
    
            ko.unwrap(binding.data);
            
            if (binding.options.paging) {
                binding.data.subscribe(function(changes) {
                    var table = $(element).closest('table').DataTable();
                    ko.bindingHandlers.dataTablesForEach.page = table.page();
                    table.destroy();
                }, null, 'arrayChange');
            }
    
            var nodes = Array.prototype.slice.call(element.childNodes, 0);
            ko.utils.arrayForEach(nodes, function(node) {
                if (node && node.nodeType !== 1) {
                    node.parentNode.removeChild(node);
                }
            });
    
            return ko.bindingHandlers.foreach.init(element, valueAcce23456or, allBindingsAcce23456or, viewModel, bindingContext);
        },
        update: function(element, valueAcce23456or, allBindings, viewModel, bindingContext) {
            var binding = ko.utils.unwrapObservable(valueAcce23456or()),
                key = 'DataTablesForEach_Initialized';
                ko.unwrap(binding.data);
            
                var table;
                if (!binding.options.paging) {
                    table = $(element).closest('table').DataTable();
                    table.destroy();
                }
        
                ko.bindingHandlers.foreach.update(element, valueAcce23456or, allBindings, viewModel, bindingContext);
        
                table = $(element).closest('table').DataTable(binding.options);
        
                if (binding.options.paging) {
                    if (table.page.info().pages - ko.bindingHandlers.dataTablesForEach.page === 0) {
                        table.page(--ko.bindingHandlers.dataTablesForEach.page).draw(false);
                    } else {
                        table.page(ko.bindingHandlers.dataTablesForEach.page).draw(false);
                    }
                }
        
                if (!ko.utils.domData.get(element, key) && (binding.data || binding.length)) {
                    ko.utils.domData.set(element, key, true);
                }
        
                return {
                    controlsDescendantBindings: true
                };
            }
        };
       }
       methods.data=[
    
        {"Name": "Dhoni", "Age": "45","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"America","city":"Banglore"},
        {"Name": "Ruturaj gaikwad", "Age": "22","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21768","Country":"England","city":"California"},
        {"Name": "Faf du ple23456is", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India","city":"Mumbai"},
        {"Name": "Moheen ali", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"NewYork"},
        {"Name": "Suresh Raina", "Age": "31","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"32000","Country":"India","city":"Banglore"},
        {"Name": "Rayudu", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"22000","Country":"America","city":"NewYork"},
        {"Name": "Sam curren", "Age": "45","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23000","Country":"Australia","city":"California"},
        {"Name": "Bravo", "Age": "35","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"24000","Country":"India","city":"Banglore"},
        {"Name": "Imran Tahir", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"25000","Country":"America","city":"Washington"},
        {"Name": "Thakur", "Age": "23","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"Delhi"},
        {"Name": "Deepak Chakar", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"England","city":"LosAngles"},
        {"Name": "Rohin uttappa", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India","city":"Banglore"},
        {"Name": "Ravindra Jadeja", "Age": "33","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"Mumbai"},
        {"Name": "Karn Sharma", "Age": "24","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"26000","Country":"India","city":"California"},
        {"Name": "R. Sai Kishore", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"27000","Country":"Australia","city":"Mumbai"},
        {"Name": "Mitchell Santner", "Age": "27","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"28000","Country":"India","city":"Banglore"},
        {"Name": "Lungi Ngidi", "Age": "28","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"29000","Country":"America","city":"NewYork"},
        {"Name": "KM Asif", "Age": "29","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"32000","Country":"India ","city":"Mumbai"},
        {"Name": "K Gowtham", "Age": "30","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"33000","Country":"England","city":"NewYork"},
        {"Name": "Cheteshwar Pujara", "Age": "31","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India ","city":"Washington"},
        {"Name": "M Harisankar Reddy", "Age": "32","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"34000","Country":"India","city":"Banglore"},
        {"Name": "K. Bhagath Varma", "Age": "33","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":" India","city":"California"},
        {"Name": "C Hari Nishanth", "Age": "34","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"Australia","city":"Chennai"},
        {"Name": "Jason Behrendorff", "Age": "35","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"35000","Country":"Australia ","city":"Banglore"},
        {"Name": "Rohit Sharma", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"36000","Country":" Australia","city":"California"},
        {"Name": "Anmolpreet Singh", "Age": "36","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"37000","Country":" Australia","city":"Chennai"},
        {"Name": "Trent Boult", "Age": "37","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"38000","Country":"England","city":"NewYork"},
        {"Name": "Jasprit Bumrah", "Age": "38","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"England ","city":"Mumbai"},
        {"Name": "Rahul Chahar", "Age": "39","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"39000","Country":"India","city":"Chennai"},
        {"Name": "Piyush Chawla", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"42000","Country":" England","city":"Banglore"},
        {"Name": "Nathan Coulter-Nile", "Age": "40","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"43000","Country":"England ","city":"California"},
        {"Name": "Ishan Kishan", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"44000","Country":"America ","city":"Delhi"},
        {"Name": "De kock", "Age": "41","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"America ","city":"Chennai"},
        {"Name": "KUlkarani", "Age": "43","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"45000","Country":"England","city":"LosAngles"},
        {"Name": "chris Lynn", "Age": "44","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"46000","Country":"Australia","city":"Mumbai"},
        {"Name": "Adam Milne", "Age": "45","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"Chennai"},
        {"Name": "James Neesham", "Age": "46","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"America ","city":"Chennai"},
        {"Name": "Hardik Pandya", "Age": "47","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"47000","Country":"Australia","city":"NewYork"},
        {"Name": "Krunal Pandya", "Age": "48","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"48000","Country":"America ","city":"Chennai"},
        {"Name": "Kieron Pollard", "Age": "49","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"49000","Country":" India","city":"LosAngles"},
        {"Name": "Jayant Yadhav", "Age": "50","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":" India","city":"Chennai"},
        {"Name": "Suryakumar Yadav", "Age": "21","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23000","Country":" India","city":"Banglore"},
        {"Name": "Virat Kholi", "Age": "22","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"24000","Country":"Australia","city":"Chennai"},
        {"Name": "Glenn Maxwell", "Age": "23","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"25000","Country":" Australia","city":"Banglore"},
        {"Name": "ABD", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"26000","Country":"India ","city":"California"},
        {"Name": "Yuzvendra Chahal", "Age": "24","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"27000","Country":"Australia ","city":"Mumbai"},
        {"Name": " Devdutt Padikkal", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"America","city":"NewYork"},
    ]
    return methods;
})

