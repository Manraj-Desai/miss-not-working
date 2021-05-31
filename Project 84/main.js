canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;

background_image = "U2N6Tr.jpg"

car1_image = "travel-car-top_view_monsterbrain_remix.png";

car1_x = 10;
car1_y = 10;

car2_width = 100;
car2_height = 90;

car2_image = "travel-car-top_view_monsterbrain_remix.png";

car2_x = 40;
car2_y = 40;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown1", my_keydown1);

function my_keydown1(e) {
    key_pressed = e.keyCode;
    if(key_pressed == '37') {
        left1();
        console.log("left");
    }
    
    if(key_pressed == '38') {
        up1();
        console.log("up");

    }
    
    if(key_pressed == '39') {
        right1();
        console.log("right");

    }
    
    if(key_pressed == '40') {
        down1();
        console.log("down");
    }
}

window.addEventListener("keydown2", my_keydown2);

function my_keydown2(e) {
    key_pressed = e.keyCode;
    if(key_pressed == '65') {
        left2();
        console.log("left");
    }
    
    if(key_pressed == '87') {
        up2();
        console.log("up");

    }
    
    if(key_pressed == '68') {
        right2();
        console.log("right");

    }
    
    if(key_pressed == '83') {
        down2();
        console.log("down");
    }
}

function up1() {
    if(car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("x = " + car1_x + ",y = " + car1_y);
        uploadBackground();
        uploadCar1()
}

function down1() {
    if(car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("x = " + car1_x + ",y = " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function left1() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("x = " + rover_x + ",y = " + rover_y);
        uploadBackground();
        uploadCar1();
    }
}

function right1() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("x = " + rover_x + ",y = " + rover_y);
        uploadBackground();
        uploadCar1();
    }
}

function up2() {
    if(car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("x = " + car1_x + ",y = " + car1_y);
        uploadBackground();
        uploadCar1()
}

function down2() {
    if(car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("x = " + car1_x + ",y = " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}

function left2() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("x = " + rover_x + ",y = " + rover_y);
        uploadBackground();
        uploadCar1();
    }
}

function right2() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("x = " + rover_x + ",y = " + rover_y);
        uploadBackground();
        uploadCar1();
    }
}