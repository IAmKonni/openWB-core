import{_ as c,q as t,k as p,l as d,B as o,M as s,x as a,u,y as l}from"./vendor-c6bc340e.js";import"./vendor-sortablejs-02fb77a0.js";const _={name:"DeviceFemsInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},f={class:"device-fems-inverter"},m={class:"small"};function b(e,n,v,g,h,w){const i=t("openwb-base-heading"),r=t("openwb-base-alert");return p(),d("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für openEMS, Fenecon FEMS, CENTURIO 10, Kaco Hy-Control Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fems/inverter.vue"]]);export{x as default};
