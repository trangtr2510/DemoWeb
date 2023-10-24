function DomID(id){
    var element = document.getElementById(id);
    return element;
}
function emailisvalid(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function login(){
    var name= DomID('name').value;
    var pass= DomID('pass').value;

    if (name==""){
        name='';
        DomID('name--error').innerHTML="Vui lòng nhập tên tài khoản của bạn";
    } else if (name.trim().length <=2 ){
        name='';
        DomID('name--error').innerHTML="Tên tài khoản không ít hơn 2 ký tự";
    } else if (name.trim().length >=50 ){
        name='';
        DomID('name--error').innerHTML="Tên tài khoản không lớn hơn 50 ký tự";
    } else if (/\d+/.test(name)){
        name='';
        DomID('name--error').innerHTML="Tên tài khoản không gồm số";
    }else if( name.toLowerCase() !== 'admin'){
        name='';
        DomID('name--error').innerHTML="Tên tài khoản không đúng";
    } else{
        DomID('name--error').innerHTML='';
    }
    if (pass==""){
        pass='';
        DomID('pass--error').innerHTML="Vui lòng nhập mật khẩu";
    }else if( pass.toLowerCase() !== 'admin'){
        pass='';
        DomID('pass--error').innerHTML="Mật khẩu không đúng";
    } else{
        DomID('pass--error').innerHTML='';
    }
    if (name === "admin" && pass === "admin"){
        console.log(name);
        window.location.href = 'http://127.0.0.1:5501/baitaplon/main/main.html';
        // var loginForm = DomID('navbar');
        //     loginForm.style.display = 'none';
    }
}

function toast() {
    const main = DomID('navbar');
    if (main){
        const toast = document.createElement('div');
        toast.classList.add('navbar');
        toast.innerHTML=`
        
    <div class="login">
        <div class="login--text">
            <i class="fa-solid fa-right-to-bracket login--text__icon"></i>
            <div class="login--logo">
                <span class="login--logo__text">Đăng <span class="login--logo__text__import">nhập</span></span>
            </div>
        </div>
        <div class="login--box">
            <div class="login--box__text">Đăng nhập</div>
            <div class="login--box__import">
                <div class="login--box__import__label">
                    <label for="name">Tên tài khoản</label>
                    <div class="login--box__import__input">
                        <input type="text" name="name" id="name" class="login--box__import__text">
                        <div class="login--box__import__icon"> 
                            <i class="fa-solid fa-envelope "></i>
                        </div>
                        
                    </div>
                </div>
                <span id="name--error" class="error"></span>
                <div class="login--box__import__label">
                    <label for="name">Mật khẩu</label>
                    <div class="login--box__import__input">
                        <input type="password" name="pass" id="pass" class="login--box__import__text">
                        <div id="eye" onclick="daoTT()">
                            <i class="far fa-eye login--box__import__icon--eye"></i>
                        </div>
                        <div class="login--box__import__icon">
                            <i class="fa-solid fa-lock "></i>
                        </div>
                        
                    </div>
                </div>
                <span id="pass--error" class="error"></span>
                <div class="login--box__import__label login--box__import__label__forgotpass">
                    <span class="login--box__import--forgotpass" onclick= "showNewpass()"><ins>Quên mật khẩu?</ins></span>
                </div>
                <div class="login--box__import__label">
                    <input type="button" name="login" id="login" class="login--box__button" onclick="login()" value="Đăng nhập">
                </div>
            </div>
        </div>
    </div>
    <div class="login--img">
                <div class="login--close " onclick="closeLoginForm()">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <img src="/baitaplon/img/d3b20da31b7dcf23966c (1).jpg" alt="" class="login--navbar__img">
        </div>
        
        `;
        main.appendChild(toast);
    }
}

function create(){
    var name= DomID('name-newpass').value;
    var phone= DomID('phone-newpass').value;
    var email=DomID('email-newpass').value;
    var pass=DomID('newpass').value;
    if (name==""){
        name='';
        DomID('name-newpass--error').innerHTML="Vui lòng nhập tên tài khoản của bạn";
    } else if (name.trim().length <=2 ){
        name='';
        DomID('name-newpass--error').innerHTML="Tên tài khoản không ít hơn 2 ký tự";
    } else if (name.trim().length >=50 ){
        name='';
        DomID('name-newpass--error').innerHTML="Tên tài khoản không lớn hơn 50 ký tự";
    } else if (/\d+/.test(name)){
        name='';
        DomID('name-newpass--error').innerHTML="Tên tài khoản không gồm số";
    }else if( name.toLowerCase() !== 'admin'){
        name='';
        DomID('name-newpass--error').innerHTML="Tên tài khoản không đúng";
    } else{
        DomID('name-newpass--error').innerHTML='';
    }
    if (phone==""){
        phone='';
        DomID('phone-newpass--error').innerHTML="Vui lòng nhập số điện thoại của bạn";
    } else if (isNaN(phone)){
        phone='';
        DomID('phone-newpass--error').innerHTML="Số điện thoại không gồm chữ";
    } else if (phone.trim().length <10 ){
        phone='';
        DomID('phone-newpass--error').innerHTML="Số điện thoại không ít hơn 10 ký tự";
    }
    else if (phone.trim().length >10 ){
        phone='';
        DomID('phone-newpass--error').innerHTML="Số điện thoại không lớn hơn 10 ký tự";
    } else{
        DomID('phone-newpass--error').innerHTML='';
    }
    if (email==""){
        email='';
        DomID('email-newpass--error').innerHTML="Vui lòng nhập Email của bạn";
    } else if(!emailisvalid(email)){
        email='';
        DomID('email-newpass--error').innerHTML="Vui lòng nhập đúng định dạng của email, phải gồm '@abc' và tối thiểu 1 dấu '.'sau abc, có thẻ có '-' ở tên trước '@'.";
    } else{
        DomID('email-newpass--error').innerHTML='';
    }
    if (pass==""){
        pass='';
        DomID('newpass--error').innerHTML="Vui lòng nhập mật khẩu";
    } else{
        DomID('newpass--error').innerHTML='';
    }
    if (name==="admin" && phone && email && pass){
        console.log(name, phone, email, pass);
        var newpassForm = DomID('newpassword');
        newpassForm.style.display = 'none';
    }
}

function toastPass(){
    const mainpass = DomID('newpassword');
    if (mainpass){
        const toastpass = document.createElement('div');
        toastpass.classList.add('newpassword');
        toastpass.innerHTML=`
        <div class="newpassword--text">Tạo mật khẩu mới</div>
        <div class="newpassword--import">
            <div class="newpassword--import__label">
                <label for="name">Tên tài khoản</label>
                <div class="newpassword--import__input">
                    <input type="text" name="name" id="name-newpass" class="newpassword--import__text">
                    <div class="newpassword--import__icon"> 
                        <i class="fa-solid fa-envelope "></i>
                    </div>
                </div>
            </div>
            <span id="name-newpass--error" class="error"></span>
            <div class="newpassword--import__label">
                <label for="phone">Số điện thoại</label>
                <div class="newpassword--import__input">
                    <input type="text" name="phone" id="phone-newpass" class="newpassword--import__text">
                    <div class="newpassword--import__icon"> 
                        <i class="fa-solid fa-phone "></i>
                    </div>
                </div>
            </div>
            <span id="phone-newpass--error" class="error"></span>
            <div class="newpassword--import__label">
                <label for="email">Email</label>
                <div class="newpassword--import__input">
                    <input type="text" name="phone" id="email-newpass" class="newpassword--import__text">
                    <div class="newpassword--import__icon"> 
                        <i class="fa-solid fa-envelope "></i>
                    </div>
                </div>
            </div>
            <span id="email-newpass--error" class="error"></span>
            <div class="newpassword--import__label">
                <label for="pass">Mật khẩu mới</label>
                <div class="newpassword--import__input">
                    <input type="password" name="pass" id="newpass" class="newpassword--import__text">
                    <div id="eye" onclick="newpass()">
                        <i class="far fa-eye newpassword--import__icon--eye"></i>
                    </div>
                    <div class="newpassword--import__icon"> 
                        <i class="fa-solid fa-lock "></i>
                    </div>
                </div>
            </div>
            <span id="newpass--error" class="error"></span>
            <div class="newpassword--import__label">
                <input type="button" name="create-pass" id="create-pass" class="newpassword--button" onclick="create()" value="Tạo mật khẩu">
            </div>
        </div>
        <div class="newpass--close" onclick="closeNewpassForm()">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;
        mainpass.appendChild(toastpass);
    }
}


var isNewpassFormVisible = false;
var isButtonNewpassLocked = false;
function showNewpass(){
    toastPass();
    var newpassForm = DomID('newpassword');
        if (!isNewpassFormVisible) {
            // Thực hiện hành động khi giao diện được hiển thị
            newpassForm.style.display = 'block';
            isNewpassFormVisible = true;
         } 
        else {
            // Thực hiện hành động khi giao diện được đóng
            newpassForm.style.display = 'none';
            isNewpassFormVisible = false;
            var containernewpass = DomID('newpassword');
            containernewpass.innerHTML = '';
        }
}

var isLoginFormVisible = false;
var isButtonLocked = false;
function showLogin(){
    toast();
    var loginForm = DomID('navbar');
        if (!isLoginFormVisible) {
            // Thực hiện hành động khi giao diện được hiển thị
            loginForm.style.display = 'block';
            isLoginFormVisible = true;
        } else {
            // Thực hiện hành động khi giao diện được đóng
            loginForm.style.display = 'none';
            isLoginFormVisible = false;
            var container = DomID('navbar');
            container.innerHTML = '';
        }
}

function closeLoginForm() {
    var loginForm = DomID('navbar');
    var container = DomID('navbar');
        container.innerHTML = '';
        loginForm.style.display = 'none';
        isLoginFormVisible = false;
}

function closeNewpassForm(){
    var newpassForm = DomID('newpassword');
    var container = DomID('newpassword');
        container.innerHTML = '';
        newpassForm.style.display = 'none';
        isNewpassFormVisible = false;
}

function daoTT() {
    var mk = DomID("pass");
    mk.type = (mk.type === "password")? "text":"password";
}

function newpass() {
    var mk = DomID("newpass");
    mk.type = (mk.type === "password")? "text":"password";
}
// $(document).ready(function(){
//     $('#eye').click(function(){
//         $(this).toggleClass('open');
//         $(this).children('i').toggleClass('fa-eye-slash fa-eye');
//         if($(this).hasClass('open')){
//             $(this).prev().attr('type', 'text');
//         }else{
//             $(this).prev().attr('type', 'password');
//         }
//     });
// });