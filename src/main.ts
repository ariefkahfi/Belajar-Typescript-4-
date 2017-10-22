import * as  $  from 'jquery';
import * as Export from './exporter/Export';


let cs = new Export.CatService();


let insertCat = (cat : Export.Cat) =>{
    cs.save(cat);
}


let loadData = () =>{
    cs.loadData((data)=>{
        $("#card-container").empty();
        data.forEach((items)=>{
            
            let cat = new Export.Cat(items.name,items.type);
            tambahData(cat);
        });
    });
}

let tambahData = (cat : Export.Cat) =>{
    let img : string = "";
    
    let span : string = cat.getName +"<br/>";


    if(cat.getType === 'Anggora'){
        span+=cat.getType;
        img = "./img/cat1.jpg";
    }else{
        span+=cat.getType;
        img = "./img/cat2.jpg";
    }

    $("#card-container").append(
        `
            <div class='card clearfix'>
                <img src='${img}' class='card-img' alt='Cat Image'/>
                <span>${span}</span>
                <button id='card-buy'>Buy</button>
                <button id='card-info'>Info</button>
            </div>
        `
    );
}




$('#submit-buy').click(()=>{
    let modelName = $('#cat-name').val();
    let modelType = $("#type option:selected").val();
    if(modelName === '' || modelName === undefined || modelType === '' || modelType === undefined){
        alert('Form still empty');
    }else{
        let cat = new Export.Cat((<string>modelName),(<string>modelType));
        insertCat(cat);
    }
});




// open navbar and close
$('#close').click(()=>{
    $("#nav-left").css("width","0");
    $("#container").css("marginLeft","0");
});

$('#open-nav').click(()=>{
    $("#nav-left").css("width","200px");
    $("#container").css("marginLeft","200px");
});

// open navbar and close

$('#buy-page').click(()=>{
    $("#content-main-buy").css('display','block');
    $("#content-main-list").css("display","none");
});



$('#cat-page').click(()=>{
    $("#content-main-list").css("display","block");
    $("#content-main-buy").css("display","none");
    loadData();
});









