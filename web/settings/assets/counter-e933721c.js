import{_ as r,p as o,k as c,l as p,A as t,L as l,u as m,q as _,x as f}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const b={name:"DeviceDeyeCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-batterx-counter"},v={class:"small"};function h(n,e,a,x,w,s){const i=o("openwb-base-heading"),u=o("openwb-base-number-input");return c(),p("div",g,[t(i,null,{default:l(()=>[m(" Einstellungen für Deye Zähler "),_("span",v,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),t(u,{title:"Modbus ID","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=d=>s.updateConfiguration(d,"configuration.modbus_id"))},null,8,["model-value"])])}const D=r(b,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/deye/counter.vue"]]);export{D as default};
