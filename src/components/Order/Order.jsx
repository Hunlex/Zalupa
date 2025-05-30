import React, { useState } from 'react';

const Order = () => {
    // Состояния формы
    const [formData, setFormData] = useState({
        Name: '',
        lastName: '',
        phone: '',
        date: '',
        time: '',
        guests: '1'
    });

    // Состояние ошибок
    const [errors, setErrors] = useState({});

    // Функция валидации номера телефона
    const validatePhoneNumber = (value) => {
        if (!value) return false;
        const phoneRegex = /^\d{11}$/;
        return phoneRegex.test(value);
    };

    // Обработчик изменения полей формы
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Обработка номера телефона
        if (name === 'phone') {
            const cleanedValue = value.replace(/\D/g, '');
            const limitedValue = cleanedValue.slice(0, 11);
            setFormData(prev => ({ ...prev, [name]: limitedValue }));

            if (errors.phone) {
                setErrors(prev => ({ ...prev, phone: '' }));
            }
            return;
        }

        // Обработка Имени и Фамилии - разрешаем только буквы
        if (name === 'Name' || name === 'lastName') {
            // Разрешаем только буквы (включая кириллицу и латиницу)
            const cleanedValue = value.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
            setFormData(prev => ({ ...prev, [name]: cleanedValue }));

            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
            return;
        }

        // Обработка остальных полей
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
            case 'date':
                if (!value) {
                    errorMessage = 'Выберите дату';
                }
                break;
            case 'time':
                if (!value) {
                    errorMessage = 'Выберите время';
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
        const newErrors = {};

        if (!validateField('Name', formData.Name)) isValid = false;
        if (!validateField('lastName', formData.lastName)) isValid = false;
        if (!validateField('phone', formData.phone)) isValid = false;
        if (!validateField('date', formData.date)) isValid = false;
        if (!validateField('time', formData.time)) isValid = false;

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
                Дата: ${formData.date}
                Время: ${formData.time}
                Количество гостей: ${formData.guests}
            `;

            alert(message);

            // Сброс формы
            setFormData({
                Name: '',
                lastName: '',
                phone: '',
                date: '',
                time: '',
                guests: '1'
            });
            setErrors({});
        }
    };

    return (
        <div id='order' className="h-200 bg-[#FAC599] flex justify-center">
            <div className="relative container border border-[#803A12] outline-8 m-6 rounded-2xl text-[#803A12] overflow-hidden">
                <img
                    src="./picture/leftOrder.svg"
                    className="absolute inset-y-0 left-0 h-full z-0 select-none"
                    alt="Левая баннерная картинка"
                    draggable="false"
                />
                <img
                    src="./picture/rightOrder.svg"
                    className="absolute inset-y-0 right-0 h-full z-0 select-none"
                    alt="Правая баннерная картинка"
                    draggable="false"
                />

                <div className='relative flex flex-col items-center z-10'>

                    <span className='font-multiround text-[#331707] text-5xl p-6'>ЗАБРОНИРОВАТЬ СТОЛ</span>

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
                                    {/* Фиксированное место под ошибку */}
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

                                {/* Поле: Дата */}
                                <div className='flex flex-col'>
                                    <label>ДАТА</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`border border-[#803A12] px-2 placeholder-[#A9683F] ${errors.date ? 'border-red-500' : ''
                                            }`}
                                    />
                                    <div className="h-6">
                                        {errors.date && (
                                            <div className="text-red-500 text-sm mt-1">{errors.date}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Поле: Время */}
                                <div className='flex flex-col'>
                                    <label>ВРЕМЯ</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`border border-[#803A12] px-2 placeholder-[#A9683F] ${errors.time ? 'border-red-500' : ''
                                            }`}
                                    />
                                    <div className="h-6">
                                        {errors.time && (
                                            <div className="text-red-500 text-sm mt-1">{errors.time}</div>
                                        )}
                                    </div>
                                </div>

                                {/* Поле: Количество гостей */}
                                <div className='flex flex-col'>
                                    <label>КОЛ-ВО ЧЕЛОВЕК</label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className='border border-[#803A12]'
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                            <div className='mt-4'>
                                <button type="submit" className="bg-[#fab583] rounded-2xl cursor-pointer border border-[#803A12] h-20 w-80">
                                    ЗАБРОНИРОВАТЬ
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;