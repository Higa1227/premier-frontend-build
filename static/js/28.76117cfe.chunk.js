(this["webpackJsonp@tripfinder/hotel-cra"]=this["webpackJsonp@tripfinder/hotel-cra"]||[]).push([[28],{1488:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));t(943);var r=t(946),o=(t(190),t(93)),a=(t(944),t(947)),i=(t(433),t(252)),d=(t(1),t(955)),c=t(932),p=t(981),l=t(2);function s(){var n,e,t;const{control:s,formState:{errors:b},watch:x,handleSubmit:h}=Object(d.b)({mode:"onChange"}),u=x("newPassword"),m=x("confirmPassword");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.f,{children:"Change Password"}),Object(l.jsx)("form",{className:"form-container",onSubmit:h((n=>console.log(n))),children:Object(l.jsxs)(r.a,{gutter:30,children:[Object(l.jsx)(a.a,{lg:12,children:Object(l.jsx)(c.a,{label:"Enter old password",htmlFor:"oldPassword",error:b.oldPassword&&Object(l.jsx)("span",{children:"This field is required!"}),children:Object(l.jsx)(d.a,{name:"oldPassword",defaultValue:"",control:s,rules:{required:!0},render:n=>{let{field:{onChange:e,onBlur:t,value:r}}=n;return Object(l.jsx)(i.a.Password,{onChange:e,onBlur:t,value:r})}})})}),Object(l.jsx)(a.a,{lg:12,children:Object(l.jsx)(c.a,{label:"Enter new password",htmlFor:"newPassword",error:b.newPassword&&Object(l.jsxs)(l.Fragment,{children:["required"===(null===(n=b.newPassword)||void 0===n?void 0:n.type)&&Object(l.jsx)("span",{children:"This field is required!"}),"minLength"===(null===(e=b.newPassword)||void 0===e?void 0:e.type)&&Object(l.jsx)("span",{children:"New password must be at lest 6 characters!"}),"maxLength"===(null===(t=b.newPassword)||void 0===t?void 0:t.type)&&Object(l.jsx)("span",{children:"New password must not be longer than 20 characters!"})]}),children:Object(l.jsx)(d.a,{name:"newPassword",defaultValue:"",control:s,rules:{required:!0,minLength:6,maxLength:20},render:n=>{let{field:{onChange:e,onBlur:t,value:r}}=n;return Object(l.jsx)(i.a.Password,{onChange:e,onBlur:t,value:r})}})})}),Object(l.jsx)(a.a,{lg:24,children:Object(l.jsx)(c.a,{label:"Confirm new password",htmlFor:"confirmPassword",error:m&&u!==m&&Object(l.jsx)("span",{children:"Confirm password must be the same!"}),children:Object(l.jsx)(d.a,{name:"confirmPassword",defaultValue:"",control:s,render:n=>{let{field:{onChange:e,onBlur:t,value:r}}=n;return Object(l.jsx)(i.a.Password,{onChange:e,onBlur:t,value:r})}})})}),Object(l.jsx)(a.a,{lg:24,children:Object(l.jsx)("div",{className:"submit-container",children:Object(l.jsx)(o.a,{htmlType:"submit",type:"primary",children:"Save Changes"})})})]})})]})}},932:function(n,e,t){"use strict";t(1);var r,o=t(945),a=t(27),i=t(19),d=t(4);var c=i.d.div(r||(r=Object(a.a)(["\n  margin-bottom: 24px;\n\n  .field-label {\n    display: block;\n    color: ",";\n    font-size: 15px;\n    line-height: 18px;\n    font-weight: 600;\n    margin-bottom: 15px;\n  }\n\n  .ant-input,\n  .ant-picker,\n  .ant-input-number,\n  .ant-input-password {\n    width: 100%;\n    min-height: 48px;\n    border-radius: 3px;\n    border-color: ",";\n    &:focus,\n    &.ant-input-focused,\n    &.ant-picker-focused,\n    &.ant-input-number-focused,\n    &.ant-input-password-focused {\n      box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);\n    }\n  }\n\n  .ant-checkbox-wrapper {\n    .ant-checkbox {\n      + span {\n        font-size: 15px;\n        font-weight: 700;\n        color: ",";\n        line-height: 1;\n      }\n      .ant-checkbox-inner {\n        border-radius: 0;\n        border-color: ",";\n      }\n      &.ant-checkbox-checked {\n        .ant-checkbox-inner {\n          border-color: ",";\n          background-color: ",";\n        }\n      }\n    }\n  }\n\n  .ant-input-number {\n    max-width: 100px;\n    .ant-input-number-input {\n      min-height: 48px;\n    }\n    &:hover {\n      border-color: ",";\n    }\n  }\n  .ant-input-number-handler:hover {\n    .ant-input-number-handler-up-inner,\n    .ant-input-number-handler-down-inner {\n      color: ",";\n    }\n  }\n\n  .ant-picker {\n    &:hover {\n      border-color: ",";\n    }\n  }\n\n  .ant-select {\n    &.ant-select-single:not(.ant-select-customize-input) {\n      width: 100%;\n      .ant-select-selector {\n        border-radius: 3px;\n        border-color: ",";\n        min-height: 48px;\n        .ant-select-selection-search-input {\n          min-height: 48px;\n        }\n        .ant-select-selection-item {\n          display: flex;\n          align-items: center;\n        }\n      }\n    }\n    &.ant-select-focused {\n      &.ant-select-single:not(.ant-select-customize-input) {\n        .ant-select-selector {\n          box-shadow: 0 0 0 1px rgba(0, 132, 137, 0.2);\n        }\n      }\n    }\n  }\n\n  &.has-error {\n    .ant-input,\n    .ant-input-password {\n      border-color: ",";\n    }\n    .feedback {\n      color: ",";\n    }\n    .ant-input-password {\n      .ant-input {\n        border-color: transparent;\n      }\n    }\n  }\n\n  .ant-input-password {\n    .ant-input {\n      min-height: auto;\n      border-radius: initial;\n      border-color: transparent;\n      &:focus {\n        box-shadow: none;\n      }\n    }\n  }\n\n  .ant-radio-group-solid {\n    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n      border-color: ",";\n      background-color: ",";\n      &::before {\n        content: none;\n      }\n      &:hover {\n        color: #fff;\n        &::before {\n          content: none;\n        }\n      }\n    }\n    .ant-radio-button-wrapper {\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  button[type='submit'] {\n    border-radius: 3px;\n    height: 47px;\n    border-color: ",";\n    background-color: ",";\n    font-size: 15px;\n    font-weight: 700;\n    text-transform: capitalize;\n    padding-left: 28px;\n    padding-right: 28px;\n    line-height: 1;\n\n    &::after {\n      content: none;\n    }\n  }\n"])),Object(d.a)("text.0","#2C2C2C"),Object(d.a)("border.3","#E6E6E6"),Object(d.a)("text.0","#2C2C2C"),Object(d.a)("text.1","#909090"),Object(d.a)("primary.0","#008489"),Object(d.a)("primary.0","#008489"),Object(d.a)("border.3","#E6E6E6"),Object(d.a)("primary.0","#008489"),Object(d.a)("border.3","#E6E6E6"),Object(d.a)("border.3","#E6E6E6"),Object(d.a)("error.0","#F9503D"),Object(d.a)("error.0","#F9503D"),Object(d.a)("primary.0","#008489"),Object(d.a)("primary.0","#008489"),Object(d.a)("primary.0","#008489"),Object(d.a)("primary.0","#008489"),Object(d.a)("primary.0","#008489")),p=t(2);e.a=n=>{let{className:e,label:t,labelTag:r,htmlFor:a,children:i,error:d}=n;const l=["form-control"];return d&&l.push("has-error"),e&&l.push(e),Object(p.jsxs)(c,{className:l.join(" "),children:[t&&Object(p.jsx)(o.a,{className:"field-label",as:r,htmlFor:a,content:t}),i,d&&Object(p.jsx)("div",{className:"feedback",children:d})]})}},945:function(n,e,t){"use strict";t(1);var r=t(19),o=t(15),a=t(104),i=t(2);const d=Object(r.d)("label")(a.a,o.k,o.m,o.x,o.q,o.p,Object(a.b)("Heading"));e.a=n=>{let{htmlFor:e,content:t,...r}=n;return Object(i.jsx)(d,{htmlFor:e,...r,children:t})}},981:function(n,e,t){"use strict";t.d(e,"a",(function(){return m})),t.d(e,"h",(function(){return g})),t.d(e,"b",(function(){return f})),t.d(e,"e",(function(){return j})),t.d(e,"c",(function(){return w})),t.d(e,"g",(function(){return O})),t.d(e,"f",(function(){return v})),t.d(e,"d",(function(){return y}));var r,o,a,i,d,c,p,l,s,b=t(27),x=t(19),h=t(4);const u=x.d.div(r||(r=Object(b.a)(["\n  padding: 60px 0;\n  @media (max-width: 767px) {\n    padding: 30px 0;\n  }\n"]))),m=x.d.aside(o||(o=Object(b.a)(["\n  border-radius: 6px;\n  background-color: ",";\n  box-shadow: 0 3px 6px ",";\n  overflow: hidden;\n  @media (max-width: 767px) {\n    box-shadow: none;\n    margin-bottom: 0;\n  }\n\n  .ant-menu {\n    padding: 27px 0 20px;\n    border: 0;\n    @media (max-width: 767px) {\n      display: flex;\n      flex-wrap: nowrap;\n      overflow-y: auto;\n      padding: 20px 0 30px;\n    }\n    li {\n      margin: 22px 0;\n      height: 26px;\n      line-height: 26px;\n      padding: 0 30px !important;\n      @media (min-width: 1441px) {\n        padding: 0 60px !important;\n      }\n      @media (max-width: 767px) {\n        width: auto;\n        height: inherit;\n        line-height: initial;\n        padding: 0 15px !important;\n        margin: 0 !important;\n        flex-shrink: 0;\n        &:first-child {\n          padding-left: 0 !important;\n        }\n        &::after {\n          display: none;\n        }\n      }\n      &.ant-menu-item-selected {\n        background-color: transparent;\n        &::after {\n          left: 0;\n          right: auto;\n          border-color: ",";\n        }\n        a {\n          color: ",";\n          font-weight: 700;\n        }\n      }\n      a {\n        color: ",";\n        font-size: 15px;\n        transition: 0.3s ease;\n        @media (max-width: 767px) {\n          padding-bottom: 8px;\n          border-bottom: 2px solid transparent;\n          &.active {\n            border-bottom-color: ",";\n          }\n        }\n        &:hover {\n          color: ",";\n        }\n      }\n    }\n  }\n"])),Object(h.a)("color.1","#ffffff"),Object(h.a)("boxShadow.1","rgba(26, 68, 116, 0.16)"),Object(h.a)("primary.0","#008489"),Object(h.a)("primary.0","#008489"),Object(h.a)("text.0","#2C2C2C"),Object(h.a)("primary.0","#008489"),Object(h.a)("primary.0","#008489")),g=x.d.div(a||(a=Object(b.a)(["\n  overflow: hidden;\n  @media (max-width: 767px) {\n    height: 67px;\n    margin-bottom: 8px;\n  }\n"]))),f=x.d.div(i||(i=Object(b.a)(["\n  background-color: ",";\n  padding: 45px 30px 30px;\n  @media (min-width: 1441px) {\n    padding: 60px 60px 30px;\n  }\n  @media (max-width: 767px) {\n    display: flex;\n    align-items: center;\n    padding: 32px 30px;\n  }\n  .ant-avatar {\n    width: 90px;\n    height: 90px;\n    margin-bottom: 25px;\n    @media (max-width: 767px) {\n      width: 80px;\n      height: 80px;\n      margin-bottom: 0;\n      margin-right: 20px;\n      flex-shrink: 0;\n    }\n    @media (max-width: 320px) {\n      width: 65px;\n      height: 65px;\n    }\n  }\n  a {\n    color: ",";\n    font-size: 13px;\n    line-height: 16px;\n    &:hover,\n    &:focus {\n      outline: 0;\n      box-shadow: none;\n      text-decoration: none;\n    }\n  }\n"])),Object(h.a)("color.2","#F7F7F7"),Object(h.a)("text.0","#2C2C2C")),j=x.d.div(d||(d=Object(b.a)([""]))),w=x.d.h3(c||(c=Object(b.a)(["\n  color: ",";\n  font-size: 17px;\n  line-height: 21px;\n  font-weight: 700;\n  margin-bottom: 4px;\n"])),Object(h.a)("text.0","#2C2C2C")),O=x.d.div(p||(p=Object(b.a)(["\n  padding: 30px;\n  border-radius: 6px;\n  border: 1px solid ",";\n  background-color: ",";\n  overflow: hidden;\n  @media (min-width: 1441px) {\n    padding: 60px;\n  }\n  @media (max-width: 767px) {\n    padding: 0;\n    border-radius: 0;\n    border: 0;\n\n    h2 {\n      display: none;\n    }\n\n    form {\n      padding-bottom: 50px;\n    }\n  }\n\n  .submit-container {\n    display: flex;\n    flex-direction: row-reverse;\n    margin-top: 30px;\n    @media (max-width: 767px) {\n      width: 100%;\n      padding: 22px 30px;\n      flex-direction: row;\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n      background-color: ",";\n      border-top: 1px solid ",";\n    }\n    > button[type='submit'] {\n      border-radius: 3px;\n      height: 47px;\n      border-color: ",";\n      background-color: ",";\n      font-size: 15px;\n      font-weight: 700;\n      text-transform: capitalize;\n      padding-left: 28px;\n      padding-right: 28px;\n      line-height: 1;\n      &::after {\n        content: none;\n      }\n    }\n  }\n"])),Object(h.a)("border.3","#E6E6E6"),Object(h.a)("color.1","#ffffff"),Object(h.a)("color.1","#ffffff"),Object(h.a)("border.3","#E6E6E6"),Object(h.a)("primary.0","#008489"),Object(h.a)("primary.0","#008489")),v=x.d.h2(l||(l=Object(b.a)(["\n  color: ",";\n  font-size: 25px;\n  line-height: 30px;\n  font-weight: 700;\n  margin-bottom: 27px;\n  @media (min-width: 1441px) {\n    margin-bottom: 40px;\n  }\n  @media (max-width: 1200px) {\n    font-size: 22px;\n  }\n"])),Object(h.a)("text.0","#2C2C2C")),y=x.d.div(s||(s=Object(b.a)(["\n  @media (max-width: 767px) {\n    padding-bottom: 50px;\n  }\n  h4 {\n    font-size: 15px;\n    font-weight: 700;\n    line-height: 18px;\n    margin-bottom: 20px;\n  }\n  .image_uploader {\n    display: block;\n    overflow: hidden;\n    margin-bottom: 30px;\n  }\n  .ant-upload.ant-upload-drag {\n    border-radius: 3px;\n    background-color: ",";\n    border: 1px solid ",";\n    &:not(.ant-upload-disabled):hover {\n      border-color: ",";\n    }\n    .ant-upload.ant-upload-btn {\n      padding: 56px 0;\n      @media (max-width: 767px) {\n        padding: 30px 0;\n      }\n      .ant-upload-drag-container {\n        > div {\n          flex-direction: column;\n          justify-content: center;\n          .ant-upload-text {\n            padding: 0;\n            margin: 5px 0 0;\n            text-decoration: underline;\n            background-color: transparent;\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .ant-upload-list {\n    &.ant-upload-list-picture-card {\n      margin-top: 20px;\n      .ant-upload-list-item {\n        padding: 5px;\n        border-radius: 3px;\n        border-color: ",";\n      }\n    }\n  }\n"])),Object(h.a)("color.2","#F7F7F7"),Object(h.a)("border.0","#EBEBEB"),Object(h.a)("border.0","#EBEBEB"),Object(h.a)("primary.0","#008489"),Object(h.a)("border.3","#E6E6E6"));e.i=u}}]);
//# sourceMappingURL=28.76117cfe.chunk.js.map