// inputmask
const form = document.querySelector(".contacts__form");
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask("+7(999)999-99-99");
inputMask.mask(telSelector);

const validation = new JustValidate(".contacts__form", {
    errorFieldCssClass: "is-invalid",
    errorFieldStyle: {
        border: "1px solid #d11616",
    },

    errorLabelCssClass: "is-label-invalid",
    errorLabelStyle: {
        color: "#d11616",
    },
});

validation
    .addField("#name", [{
            rule: "required",
            errorMessage: "Введите имя!",
        },
        {
            rule: "minLength",
            value: 3,
            errorMessage: "Минимальное количество символов - 3",
        },
        {
            rule: "maxLength",
            value: 15,
            errorMessage: "Максимальное количество символов - 15",
        },
    ])
    .addField("#tel", [{
            rule: "required",
            errorMessage: "Введите номер телефона!",
        },
        {
            rule: "function",
            validator: function() {
                const phone = telSelector.inputmask.unmaskedvalue();
                return phone.length === 10;
            },
            errorMessage: "Введите корректный телефон",
        },
    ])
    .onSuccess((event) => {
        console.log("Validation passes and form submitted", event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("Отправлено");
                    alert("Ваша заявка успешно отправлена");
                }
            }
        };

        xhr.open("POST", "mail.php", true);
        xhr.send(formData);

        event.target.reset();
    });