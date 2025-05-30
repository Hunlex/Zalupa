import React, { useState } from 'react';

const Job = () => {
    // Состояния формы
    const [formData, setFormData] = useState({
        Name: '',
        lastName: '',
        phone: '',
        email: ''
    });

    // Состояние ошибок
    const [errors, setErrors] = useState({});

    // Функция валидации номера телефона
    const validatePhoneNumber = (value) => {
        if (!value) return false;
        const phoneRegex = /^\d{11}$/;
        return phoneRegex.test(value);
    };

    // Функция валидации email
    const validateEmail = (value) => {
        if (!value) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    // Обработчик изменения полей формы
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const cleanedValue = value.replace(/\D/g, '');
            const limitedValue = cleanedValue.slice(0, 11);
            setFormData(prev => ({ ...prev, [name]: limitedValue }));

            if (errors.phone) {
                setErrors(prev => ({ ...prev, phone: '' }));
            }
            return;
        }

        // Добавленная фильтрация для Имени и Фамилии
        if (name === 'Name' || name === 'lastName') {
            // Разрешаем только буквы (включая кириллицу и латиницу)
            const cleanedValue = value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
            setFormData(prev => ({ ...prev, [name]: cleanedValue }));

            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Валидация поля при потере фокуса
    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    // Валидация конкретного поля
    const validateField = (name, value) => {
        let errorMessage = '';

        switch (name) {
            case 'Name':
                if (!value.trim() || value.trim().length < 2 || value.trim().length > 30) {
                    errorMessage = 'Имя длиной от 2 до 30 символов';
                }
                break;
            case 'lastName':
                if (!value.trim() || value.trim().length < 2 || value.trim().length > 40) {
                    errorMessage = 'Фамилия длиной от 2 до 40 символов';
                }
                break;
            case 'phone':
                if (!validatePhoneNumber(value)) {
                    errorMessage = 'Введите корректный номер (11 цифр)';
                }
                break;
            case 'email':
                if (!validateEmail(value)) {
                    errorMessage = 'Введите корректный email';
                }
                break;
            default:
                break;
        }

        if (errorMessage) {
            setErrors(prev => ({ ...prev, [name]: errorMessage }));
            return false;
        }

        return true;
    };

    // Валидация всей формы
    const validateForm = () => {
        let isValid = true;

        if (!validateField('Name', formData.Name)) isValid = false;
        if (!validateField('lastName', formData.lastName)) isValid = false;
        if (!validateField('phone', formData.phone)) isValid = false;
        if (!validateField('email', formData.email)) isValid = false;

        return isValid;
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const message = `
                Собранные данные:
                -------------------
                Имя: ${formData.Name}
                Фамилия: ${formData.lastName}
                Телефон: ${formData.phone}
                Email: ${formData.email}
            `;

            alert(message);

            // Сброс формы
            setFormData({
                Name: '',
                lastName: '',
                phone: '',
                email: ''
            });
            setErrors({});
        }
    };

    return (
        <div id='job' className="h-190 bg-[#FAC599] flex justify-center">
            <div id='about' className="relative container border border-[#803A12] outline-8 m-6 rounded-2xl text-[#803A12] overflow-hidden">
                <img
                    src="./picture/leftJob.svg"
                    className="absolute inset-y-0 left-0 h-full z-0 select-none"
                    alt="Левая баннерная картинка"
                    draggable="false"
                />
                <img
                    src="./picture/rightJob.svg"
                    className="absolute inset-y-0 right-0 h-full z-0 select-none"
                    alt="Правая баннерная картинка"
                    draggable="false"
                />

                <div className='relative flex flex-col items-center z-10'>
                    <h2 className='font-multiround text-[#331707] text-5xl text-center mt-10 p-4 z-10'>Хотите стать нашим сотрудником?</h2>
                    <h3 className="font-multiround text-[#331707] text-4xl text-center z-10 mb-6">Оставьте заявку</h3>

                    <div>
                        <form className='text-2xl font-nunito font-bold' onSubmit={handleSubmit}>

                            <div className="flex flex-col gap-2 ">
                                {/* Поле: Имя */}
                                <div className='flex flex-col'>
                                    <label>ИМЯ</label>
                                    <input
                                        type="text"
                                        name="Name"
                                        placeholder='Имя'
                                        value={formData.Name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`border border-[#803A12] px-2 placeholder-[#A9683F] ${errors.Name ? 'border-red-500' : ''
                                            }`}
                                    />
                                    <div className="h-6">
                                        {errors.Name && (
                                            <div className="text-red-500 text-sm mt-1">{errors.Name}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Поле: Фамилия */}
                                <div className='flex flex-col'>
                                    <label>ФАМИЛИЯ</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder='Фамилия'
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`border border-[#803A12] px-2 placeholder-[#A9683F] ${errors.lastName ? 'border-red-500' : ''
                                            }`}
                                    />
                                    <div className="h-6">
                                        {errors.lastName && (
                                            <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Поле: Телефон */}
                                <div className='flex flex-col'>
                                    <label>ТЕЛЕФОН</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="7XXXXXXXXXX"
                                        className={`border border-[#803A12] px-2 placeholder-[#A9683F] ${errors.phone ? 'border-red-500' : ''
                                            }`}
                                    />
                                    <div className="h-6">
                                        {errors.phone && (
                                            <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Поле: Email */}
                                <div className='flex flex-col'>
                                    <label>EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`border border-[#803A12] px-2 placeholder-[#A9683F] ${errors.email ? 'border-red-500' : ''
                                            }`}
                                    />
                                    <div className="h-6">
                                        {errors.email && (
                                            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <button type="submit" className="bg-[#fab583] rounded-2xl cursor-pointer border border-[#803A12] h-20 w-80">
                                    ОТПРАВИТЬ
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Job;