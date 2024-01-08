exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 8354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_Styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8883);
/* harmony import */ var _app_Styles_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_Styles_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2999);
/* harmony import */ var _app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3500);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5699);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Formulario = ()=>{
    const [formulario, setFormulario] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        username: "",
        telefono: "",
        email: ""
    });
    // Función para manejar cambios en los campos del formulario
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };
    //Mensaje de confirmación para el envío del formulario
    const [mostrarConfirmacion, setMostrarConfirmacion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const refForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const habdleSubmit = (e)=>{
        e.preventDefault();
        const serviceId = "service_faodjkp";
        const templateId = "template_ol1vlpo";
        //3er párametro
        const apikey = "xIY4Yl4QgWO1MwsW4";
        //Enviando la información por EmailJS
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__/* ["default"].sendForm */ .ZP.sendForm(serviceId, templateId, refForm.current, apikey).then((result)=>console.log(result.text)).catch((error)=>console.error(error));
        // Limpia los valores del formulario
        setMostrarConfirmacion(true);
        // Limpia los valores del formulario
        setFormulario({
            nombre: "",
            telefono: "",
            email: ""
        });
        // Después de mostrar el mensaje de confirmación, ocúltalo después de 3 segundos
        setTimeout(()=>{
            setMostrarConfirmacion(false);
        }, 3000); // 3000 milisegundos (3 segundos)
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenedorFormulario)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueIzq)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().formulario),
                ref: refForm,
                action: "",
                onSubmit: habdleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: '"No dejes para ma\xf1ana lo que puedes hacer hoy"'
                                    }),
                                    "Solicita tu Servicio"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Env\xedanos tus datos llenando el formulario y te contactaremos lo m\xe1s pronto posible."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "nombre",
                                type: "text",
                                required: true,
                                autoComplete: "off",
                                id: "nombre",
                                value: formulario.nombre,
                                onChange: handleInputChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "symbol-required name",
                                htmlFor: "nombre",
                                name: "username",
                                children: "Nombre"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__/* .FaUser */ .Xws, {
                                className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "telefono",
                                id: "telefono",
                                type: "number",
                                required: true,
                                autoComplete: "off",
                                value: formulario.telefono,
                                onChange: handleInputChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "symbol-required",
                                htmlFor: "telefono",
                                name: "telefono",
                                children: "Tel\xe9fono"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__/* .FaPhone */ .I7T, {
                                className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputBox),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "email",
                                id: "email",
                                type: "email",
                                required: true,
                                autoComplete: "off",
                                value: formulario.email,
                                onChange: handleInputChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "symbol-required",
                                htmlFor: "email",
                                name: "email",
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__/* .FaMailBulk */ .KKr, {
                                className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-form",
                        children: "Enviar Formulario"
                    }),
                    mostrarConfirmacion && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().mensajeconfirmacion),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "\xa1Los datos se han enviado con \xe9xito! El equipo de InnovaTech pronto le estar\xe1 contactando."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_app_Styles_formulario_module_css__WEBPACK_IMPORTED_MODULE_4___default().bloqueDer)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Formulario);


/***/ }),

/***/ 2999:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorFormulario": "formulario_contenedorFormulario__qCOX4",
	"bloqueIzq": "formulario_bloqueIzq___zega",
	"bloqueDer": "formulario_bloqueDer__NVbDK",
	"formulario": "formulario_formulario__b10XO",
	"inputBox": "formulario_inputBox__o2GUJ",
	"icon": "formulario_icon__wWQ_L",
	"mensajeconfirmacion": "formulario_mensajeconfirmacion__pVs_K"
};


/***/ })

};
;