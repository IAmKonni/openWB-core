import{_ as u,p as t,k as c,l as p,A as o,L as l,u as m,q as _,x as f}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const b={name:"DeviceDeyeInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},v={class:"device-batterx-inverter"},g={class:"small"};function h(n,e,i,x,w,a){const s=t("openwb-base-heading"),r=t("openwb-base-number-input");return c(),p("div",v,[o(s,null,{default:l(()=>[m(" Einstellungen für Deye Wechselrichter "),_("span",g,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),o(r,{title:"Modbus ID","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=d=>a.updateConfiguration(d,"configuration.modbus_id"))},null,8,["model-value"])])}const B=u(b,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/deye/inverter.vue"]]);export{B as default};
