import{_ as p,p as r,k as m,l as v,A as n,L as a,u as l}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const f={name:"VehicleSocPSA",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(d,e=void 0){this.$emit("update:configuration",{value:d,object:e})}}},g={class:"vehicle-soc-psa"};function _(d,e,i,b,h,o){const u=r("openwb-base-text-input"),s=r("openwb-base-select-input"),c=r("openwb-base-card");return m(),v("div",g,[n(u,{title:"Benutzername",required:"",subtype:"user","model-value":i.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.user_id"))},{help:a(()=>[l(" Der Benutzername für die Anmeldung an den PSA-Servern. ")]),_:1},8,["model-value"]),n(u,{title:"Kennwort",required:"",subtype:"password","model-value":i.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.password"))},{help:a(()=>[l(" Das Passwort für die Anmeldung an den PSA-Servern. ")]),_:1},8,["model-value"]),n(s,{title:"Marke",required:"",notSelected:"Bitte auswählen",options:[{value:"Peugeot",text:"Peugeot"},{value:"Citroen",text:"Citroen"},{value:"DS",text:"DS"},{value:"Opel",text:"Opel"},{value:"Vauxhall",text:"Vauxhall"}],"model-value":i.vehicle.configuration.manufacturer,"onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.manufacturer"))},{help:a(()=>[l(" Marke aus des Fahrzeugs.")]),_:1},8,["model-value"]),n(u,{title:"VIN","model-value":i.vehicle.configuration.vin,"onUpdate:modelValue":e[3]||(e[3]=t=>o.updateConfiguration(t,"configuration.vin"))},{help:a(()=>[l(" Die Fahrgestellnummer des Fahrzeugs. Nur notwendig falls mehrere Fahrzeuge im selben Account vorhanden sind. ")]),_:1},8,["model-value"]),n(c,{title:"Erweiterte Einstellungen",subtype:"info",collapsible:!0,collapsed:!0},{default:a(()=>[n(u,{title:"Client ID",subtype:"user","model-value":i.vehicle.configuration.client_id,"onUpdate:modelValue":e[4]||(e[4]=t=>o.updateConfiguration(t,"configuration.client_id"))},{help:a(()=>[l(" Die Client-ID für die Anmeldung an den PSA-Servern, muss normalerweise nicht angegeben werden. ")]),_:1},8,["model-value"]),n(u,{title:"Client Secret",subtype:"password","model-value":i.vehicle.configuration.client_secret,"onUpdate:modelValue":e[5]||(e[5]=t=>o.updateConfiguration(t,"configuration.client_secret"))},{help:a(()=>[l(" Das Client-Secret für die Anmeldung an den PSA-Servern, muss normalerweise nicht angegeben werden. ")]),_:1},8,["model-value"])]),_:1})])}const S=p(f,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/psa/vehicle.vue"]]);export{S as default};
