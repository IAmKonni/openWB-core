import{_ as a,q as s,k as r,l as i,B as o,M as d,x as u}from"./vendor-c6bc340e.js";import"./vendor-sortablejs-02fb77a0.js";const c={name:"VehicleSocManual",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},l={class:"vehicle-soc-tesla"};function p(e,t,h,m,_,f){const n=s("openwb-base-alert");return r(),i("div",l,[o(n,{subtype:"info"},{default:d(()=>[u(' Beim Anstecken des Fahrzeugs muss der aktuelle SoC über die Hauptseite angegeben werden. Anhand des Zählers im Ladepunkt wird dann der aktuelle SoC errechnet. Ausschlaggebend für die Qualität dieses Moduls sind die beiden Einstellungen "Kapazität der Batterie" in dem Fahrzeug-Profil und "Wirkungsgrad der Ladeelektronik". ')]),_:1})])}const v=a(c,[["render",p],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/manual/vehicle.vue"]]);export{v as default};
