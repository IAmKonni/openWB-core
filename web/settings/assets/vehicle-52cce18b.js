import{_ as l,p as s,k as c,l as p,A as i,L as r,u}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const m={name:"VehicleSocSkodaconnect",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(d,e=void 0){this.$emit("update:configuration",{value:d,object:e})}}},v={class:"vehicle-soc-skodaconnect"};function f(d,e,t,g,_,o){const a=s("openwb-base-text-input");return c(),p("div",v,[i(a,{title:"Benutzername",required:"",subtype:"user","model-value":t.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.user_id"))},{help:r(()=>[u(" Der Benutzername für die Anmeldung an den SkodaConnect-Servern. ")]),_:1},8,["model-value"]),i(a,{title:"Kennwort",required:"",subtype:"password","model-value":t.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.password"))},{help:r(()=>[u(" Das Passwort für die Anmeldung an den SkodaConnect-Servern. ")]),_:1},8,["model-value"]),i(a,{title:"VIN",required:"","model-value":t.vehicle.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.vin"))},{help:r(()=>[u(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"])])}const w=l(m,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/skodaconnect/vehicle.vue"]]);export{w as default};
