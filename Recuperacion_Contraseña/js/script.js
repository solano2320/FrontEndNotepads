const container = document.getElementById('container');

// Botones para cambiar de sección
const sendCodeBtn = document.getElementById('sendCode');
const verifyCodeBtn = document.getElementById('verifyCode');

// Elementos de los formularios
const forgotPasswordForm = document.querySelector('.forgot-password');
const verificationCodeForm = document.querySelector('.verification-code');
const resetPasswordForm = document.querySelector('.reset-password');

// Enviar código de verificación
sendCodeBtn.addEventListener('click', () => {
    forgotPasswordForm.classList.remove('active');
    verificationCodeForm.classList.add('active');
});

// Verificar código
verifyCodeBtn.addEventListener('click', () => {
    verificationCodeForm.classList.remove('active');
    resetPasswordForm.classList.add('active');
});
