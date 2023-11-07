import{C as W}from"./index-02c2fcbd.js";import{l as w,G as S,F as B,H as C,I,c as T,J as V,K as $,L as A,M as z}from"./vendor-fortawesome-0f5e79b9.js";import{_ as x,p as o,k as l,y as u,L as i,A as t,u as s,x as m,q as k,z as b,l as N,G as q,I as L}from"./vendor-94ac8c48.js";import"./vendor-bootstrap-9f620114.js";import"./vendor-jquery-f7104ff8.js";import"./vendor-axios-dc63434e.js";import"./vendor-sortablejs-dbc23470.js";w.add(S);const H={name:"ChargePointSumCard",mixins:[W],components:{FontAwesomeIcon:B}};function Z(e,h,n,g,_,a){const c=o("font-awesome-icon"),d=o("openwb-base-text-input"),p=o("openwb-base-heading"),r=o("openwb-base-card");return l(),u(r,{subtype:"primary",collapsible:!0,collapsed:!0},{header:i(()=>[t(c,{"fixed-width":"",icon:["fas","charging-station"]}),s(" Alle Ladepunkte ")]),default:i(()=>[t(d,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/chargepoint/get/power",3,3,.001)},null,8,["model-value"]),t(d,{title:"Zählerstand laden",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/imported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Zählerstand entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/exported",3,3,.001)},null,8,["model-value"]),t(p,null,{default:i(()=>[s("Historie")]),_:1}),t(d,{title:"Heute geladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Heute entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/daily_exported",3,3,.001)},null,8,["model-value"])]),_:1})}const M=x(H,[["render",Z],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ChargePointSumCard.vue"]]);w.add(C,I,T,S);const D={name:"ChargePointCard",mixins:[W],components:{FontAwesomeIcon:B},props:{installedChargePointKey:String,installedChargePoint:Object},data(){return{statusLevel:["success","warning","danger"]}},computed:{chargePointIndex:{get(){return parseInt(this.installedChargePointKey.match(/(?:\/)(\d+)(?=\/)/)[1])}}}},E=k("br",null,null,-1),K=k("br",null,null,-1);function F(e,h,n,g,_,a){const c=o("font-awesome-icon"),d=o("openwb-base-alert"),p=o("openwb-base-checkbox-input"),r=o("openwb-base-text-input"),f=o("openwb-base-heading"),y=o("openwb-base-card");return l(),u(y,{subtype:"primary",collapsible:!0,collapsed:!0},{header:i(()=>[t(c,{"fixed-width":"",icon:["fas","charging-station"]}),s(" "+m(n.installedChargePoint.name)+" (ID: "+m(a.chargePointIndex)+") ",1)]),default:i(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/chargepoint/"+a.chargePointIndex+"/get/fault_state"]]},{default:i(()=>[e.$store.state.mqtt["openWB/chargepoint/"+a.chargePointIndex+"/get/fault_state"]==1?(l(),u(c,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/chargepoint/"+a.chargePointIndex+"/get/fault_state"]==2?(l(),u(c,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(l(),u(c,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),E,s(" "+m(e.$store.state.mqtt["openWB/chargepoint/"+a.chargePointIndex+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(d,{subtype:"info"},{default:i(()=>[s(" Statusmeldung:"),K,s(" "+m(e.$store.state.mqtt["openWB/chargepoint/"+a.chargePointIndex+"/get/state_str"]),1)]),_:1}),t(p,{title:"Fahrzeug angesteckt",disabled:"","model-value":e.$store.state.mqtt["openWB/chargepoint/"+a.chargePointIndex+"/get/plug_state"]==1},null,8,["model-value"]),t(p,{title:"Ladevorgang aktiv",disabled:"","model-value":e.$store.state.mqtt["openWB/chargepoint/"+a.chargePointIndex+"/get/charge_state"]==1},null,8,["model-value"]),t(r,{title:"Zählerstand laden",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/imported",3,3,.001)},null,8,["model-value"]),t(r,{title:"Zählerstand entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/exported",3,3,.001)},null,8,["model-value"]),t(r,{title:"Heute geladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(r,{title:"Heute entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(r,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/power",3,3,.001)},null,8,["model-value"]),t(r,{title:"Ladestromvorgabe",readonly:"",class:"text-right text-monospace",step:"0.01",unit:"A","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/set/current",2)},null,8,["model-value"]),t(r,{title:"Netzfrequenz",readonly:"",class:"text-right text-monospace",step:"0.01",unit:"Hz","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/frequency",2)},null,8,["model-value"]),t(f,null,{default:i(()=>[s("Werte pro Phase")]),_:1}),t(r,{title:"Spannung",readonly:"",class:"text-right text-monospace",unit:"V","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/voltages",1)},null,8,["model-value"]),t(r,{title:"Strom",readonly:"",class:"text-right text-monospace",unit:"A","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/currents",2)},null,8,["model-value"]),t(r,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",unit:"kW","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/powers",3,3,.001)},null,8,["model-value"]),t(r,{title:"Leistungsfaktor",readonly:"",class:"text-right text-monospace","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/power_factors",2)},null,8,["model-value"]),t(f,null,{default:i(()=>[s("Phasen")]),_:1}),t(r,{title:"Vorgabe",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/set/phases_to_use")},null,8,["model-value"]),t(r,{title:"Aktuell",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/chargepoint/"+a.chargePointIndex+"/get/phases_in_use")},null,8,["model-value"])]),_:1})}const G=x(D,[["render",F],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ChargePointCard.vue"]]);w.add(C,I,T,V);const J={name:"CounterCard",mixins:[W],components:{FontAwesomeIcon:B},props:{counter:Object},data(){return{statusLevel:["success","warning","danger"]}}},R=k("br",null,null,-1),Q=k("br",null,null,-1);function U(e,h,n,g,_,a){const c=o("font-awesome-icon"),d=o("openwb-base-alert"),p=o("openwb-base-heading"),r=o("openwb-base-text-input"),f=o("openwb-base-card");return l(),u(f,{subtype:"danger",collapsible:!0,collapsed:!0},{header:i(()=>[t(c,{"fixed-width":"",icon:["fas","gauge-high"]}),s(" "+m(n.counter.name)+" (ID: "+m(n.counter.id)+") ",1)]),default:i(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/counter/"+n.counter.id+"/get/fault_state"]]},{default:i(()=>[e.$store.state.mqtt["openWB/counter/"+n.counter.id+"/get/fault_state"]==1?(l(),u(c,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/counter/"+n.counter.id+"/get/fault_state"]==2?(l(),u(c,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(l(),u(c,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),R,s(" "+m(e.$store.state.mqtt["openWB/counter/"+n.counter.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),e.$store.state.mqtt["openWB/counter/"+n.counter.id+"/get/state_str"]!=null?(l(),u(d,{key:0,subtype:"info"},{default:i(()=>[s(" Statusmeldung:"),Q,s(" "+m(e.$store.state.mqtt["openWB/counter/"+n.counter.id+"/get/state_str"]),1)]),_:1})):b("v-if",!0),t(p,null,{default:i(()=>[s("Zählerstände")]),_:1}),t(r,{title:"Export",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/counter/"+n.counter.id+"/get/exported",3,3,.001)},null,8,["model-value"]),t(r,{title:"Import",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/counter/"+n.counter.id+"/get/imported",3,3,.001)},null,8,["model-value"]),t(p,null,{default:i(()=>[s("Saldierte Werte")]),_:1}),t(r,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/counter/"+n.counter.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(r,{title:"Netzfrequenz",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"Hz","model-value":e.formatNumberTopic("openWB/counter/"+n.counter.id+"/get/frequency",3)},null,8,["model-value"]),t(p,null,{default:i(()=>[s("Werte pro Phase")]),_:1}),t(r,{title:"Spannung",readonly:"",class:"text-right text-monospace",unit:"V","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+n.counter.id+"/get/voltages",1)},null,8,["model-value"]),t(r,{title:"Strom",readonly:"",class:"text-right text-monospace",unit:"A","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+n.counter.id+"/get/currents",2)},null,8,["model-value"]),t(r,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",unit:"kW","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+n.counter.id+"/get/powers",3,3,.001)},null,8,["model-value"]),t(r,{title:"Leistungsfaktor",readonly:"",class:"text-right text-monospace","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+n.counter.id+"/get/power_factors",2)},null,8,["model-value"])]),_:1})}const X=x(J,[["render",U],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/CounterCard.vue"]]);w.add(C,I,T,$);const Y={name:"InverterSumCard",mixins:[W],components:{FontAwesomeIcon:B}};function ee(e,h,n,g,_,a){const c=o("font-awesome-icon"),d=o("openwb-base-text-input"),p=o("openwb-base-heading"),r=o("openwb-base-card");return l(),u(r,{subtype:"success",collapsible:!0,collapsed:!0},{header:i(()=>[t(c,{"fixed-width":"",icon:["fas","solar-panel"]}),s(" Alle Wechselrichter ")]),default:i(()=>[t(d,{title:"Zählerstand",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/pv/get/power",3,3,.001)},null,8,["model-value"]),t(p,null,{default:i(()=>[s("Erträge")]),_:1}),t(d,{title:"Heute",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Dieser Monat",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/monthly_exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Dieses Jahr",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/yearly_exported",3,3,.001)},null,8,["model-value"])]),_:1})}const te=x(Y,[["render",ee],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/InverterSumCard.vue"]]);w.add(C,I,T,$);const ne={name:"InverterCard",mixins:[W],components:{FontAwesomeIcon:B},props:{inverter:Object},data(){return{statusLevel:["success","warning","danger"]}}},oe=k("br",null,null,-1);function ae(e,h,n,g,_,a){const c=o("font-awesome-icon"),d=o("openwb-base-alert"),p=o("openwb-base-text-input"),r=o("openwb-base-card");return l(),u(r,{subtype:"success",collapsible:!0,collapsed:!0},{header:i(()=>[t(c,{"fixed-width":"",icon:["fas","solar-panel"]}),s(" "+m(n.inverter.name)+" (ID: "+m(n.inverter.id)+") ",1)]),default:i(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/pv/"+n.inverter.id+"/get/fault_state"]]},{default:i(()=>[e.$store.state.mqtt["openWB/pv/"+n.inverter.id+"/get/fault_state"]==1?(l(),u(c,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/pv/"+n.inverter.id+"/get/fault_state"]==2?(l(),u(c,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(l(),u(c,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),oe,s(" "+m(e.$store.state.mqtt["openWB/pv/"+n.inverter.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(p,{title:"Zählerstand",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/"+n.inverter.id+"/get/exported",3,3,.001)},null,8,["model-value"]),t(p,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/pv/"+n.inverter.id+"/get/power",3,3,.001)},null,8,["model-value"])]),_:1})}const re=x(ne,[["render",ae],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/InverterCard.vue"]]);w.add(C,I,T,A);const le={name:"BatterySumCard",mixins:[W],components:{FontAwesomeIcon:B}},se=k("br",null,null,-1);function ie(e,h,n,g,_,a){const c=o("font-awesome-icon"),d=o("openwb-base-alert"),p=o("openwb-base-heading"),r=o("openwb-base-text-input"),f=o("openwb-base-number-input"),y=o("openwb-base-card");return l(),u(y,{subtype:"warning",collapsible:!0,collapsed:!0},{header:i(()=>[t(c,{"fixed-width":"",icon:["fas","car-battery"]}),s(" Alle Speicher ")]),default:i(()=>[t(d,{subtype:e.statusLevel[e.$store.state.mqtt["openWB/bat/get/fault_state"]]},{default:i(()=>[e.$store.state.mqtt["openWB/bat/get/fault_state"]==1?(l(),u(c,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/bat/get/fault_state"]==2?(l(),u(c,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(l(),u(c,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),se,s(" "+m(e.$store.state.mqtt["openWB/bat/get/fault_str"]),1)]),_:1},8,["subtype"]),t(p,null,{default:i(()=>[s("Zählerstände")]),_:1}),t(r,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/imported",3,3,.001)},null,8,["model-value"]),t(r,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/exported",3,3,.001)},null,8,["model-value"]),t(p,null,{default:i(()=>[s("Tageswerte")]),_:1}),t(r,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(r,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(p,null,{default:i(()=>[s("Saldierte Werte")]),_:1}),t(r,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/bat/get/power",3,3,.001)},null,8,["model-value"]),t(f,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/bat/get/soc"]},null,8,["model-value"])]),_:1})}const ue=x(le,[["render",ie],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/BatterySumCard.vue"]]);w.add(C,I,T,A);const ce={name:"InverterCard",mixins:[W],components:{FontAwesomeIcon:B},props:{battery:Object},data(){return{statusLevel:["success","warning","danger"]}}},de=k("br",null,null,-1);function pe(e,h,n,g,_,a){const c=o("font-awesome-icon"),d=o("openwb-base-alert"),p=o("openwb-base-heading"),r=o("openwb-base-text-input"),f=o("openwb-base-number-input"),y=o("openwb-base-card");return l(),u(y,{subtype:"warning",collapsible:!0,collapsed:!0},{header:i(()=>[t(c,{"fixed-width":"",icon:["fas","car-battery"]}),s(" "+m(n.battery.name)+" (ID: "+m(n.battery.id)+") ",1)]),default:i(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/bat/"+n.battery.id+"/get/fault_state"]]},{default:i(()=>[e.$store.state.mqtt["openWB/bat/"+n.battery.id+"/get/fault_state"]==1?(l(),u(c,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/bat/"+n.battery.id+"/get/fault_state"]==2?(l(),u(c,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(l(),u(c,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),de,s(" "+m(e.$store.state.mqtt["openWB/bat/"+n.battery.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(p,null,{default:i(()=>[s("Aktuelle Werte")]),_:1}),t(r,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/bat/"+n.battery.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(f,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/bat/"+n.battery.id+"/get/soc"]},null,8,["model-value"]),t(p,null,{default:i(()=>[s("Zählerstände")]),_:1}),t(r,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/"+n.battery.id+"/get/imported",3,3,.001)},null,8,["model-value"]),t(r,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/"+n.battery.id+"/get/exported",3,3,.001)},null,8,["model-value"])]),_:1})}const me=x(ce,[["render",pe],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/BatteryCard.vue"]]);w.add(C,I,T,z);const ge={name:"VehicleCard",mixins:[W],components:{FontAwesomeIcon:B},props:{vehicle:Object,vehicleKey:String,vehicleName:String},data(){return{statusLevel:["success","warning","danger"]}},computed:{vehicleIndex:{get(){return parseInt(this.vehicleKey.match(/(?:\/)(\d+)(?=\/)/)[1])}}}},he=k("br",null,null,-1);function _e(e,h,n,g,_,a){const c=o("font-awesome-icon"),d=o("openwb-base-alert"),p=o("openwb-base-heading"),r=o("openwb-base-number-input"),f=o("openwb-base-text-input"),y=o("openwb-base-card");return l(),u(y,{subtype:"info",collapsible:!0,collapsed:!0},{header:i(()=>[t(c,{"fixed-width":"",icon:["fas","car"]}),s(" "+m(n.vehicleName)+" (ID: "+m(a.vehicleIndex)+") ",1)]),default:i(()=>[e.$store.state.mqtt["openWB/vehicle/"+a.vehicleIndex+"/get/fault_state"]!==void 0?(l(),u(d,{key:0,subtype:_.statusLevel[e.$store.state.mqtt["openWB/vehicle/"+a.vehicleIndex+"/get/fault_state"]]},{default:i(()=>[e.$store.state.mqtt["openWB/vehicle/"+a.vehicleIndex+"/get/fault_state"]==1?(l(),u(c,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/vehicle/"+a.vehicleIndex+"/get/fault_state"]==2?(l(),u(c,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(l(),u(c,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),s(" Modulmeldung:"),he,s(" "+m(e.$store.state.mqtt["openWB/vehicle/"+a.vehicleIndex+"/get/fault_str"]),1)]),_:1},8,["subtype"])):b("v-if",!0),t(p,null,{default:i(()=>[s("Fahrzeugdaten")]),_:1}),t(r,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/vehicle/"+a.vehicleIndex+"/get/soc"]},null,8,["model-value"]),t(r,{title:"Reichweite",readonly:"",class:"text-right text-monospace",unit:"km","model-value":Math.round(e.$store.state.mqtt["openWB/vehicle/"+a.vehicleIndex+"/get/range"])},null,8,["model-value"]),t(f,{title:"Letzter Zeitstempel",readonly:"",class:"text-right text-monospace","model-value":e.$store.state.mqtt["openWB/vehicle/"+a.vehicleIndex+"/get/soc_timestamp"]},null,8,["model-value"])]),_:1})}const be=x(ge,[["render",_e],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/VehicleCard.vue"]]);const fe={name:"OpenwbStatus",mixins:[W],components:{ChargePointSumCard:M,ChargePointCard:G,CounterCard:X,InverterSumCard:te,InverterCard:re,BatterySumCard:ue,BatteryCard:me,VehicleCard:be},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/get/power","openWB/chargepoint/get/imported","openWB/chargepoint/get/exported","openWB/chargepoint/get/daily_imported","openWB/chargepoint/get/daily_exported","openWB/chargepoint/+/config","openWB/chargepoint/+/get/+","openWB/chargepoint/+/get/connected_vehicle/info","openWB/chargepoint/+/set/+","openWB/system/device/+/component/+/config","openWB/counter/+/get/+","openWB/pv/get/+","openWB/pv/+/get/+","openWB/bat/get/+","openWB/bat/+/get/+","openWB/vehicle/+/name","openWB/vehicle/+/get/+"]}},computed:{installedChargePoints:{get(){let e=this.getWildcardTopics("openWB/chargepoint/+/config"),h={};for(const[n,g]of Object.entries(e))(g.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(h[n]=g);return h}},numChargePointsInstalled:{get(){return Object.keys(this.installedChargePoints).length}},counterConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"counter")}},numInvertersInstalled:{get(){return Object.keys(this.inverterConfigs).length}},inverterConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"inverter")}},numBatteriesInstalled:{get(){return Object.keys(this.batteryConfigs).length}},batteryConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"bat")}},vehicleNames:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.getWildcardTopics("openWB/vehicle/+/name")}}},methods:{filterComponentsByType(e,h){return Object.keys(e).filter(n=>e[n].type.includes(h)).reduce((n,g)=>({...n,[g]:e[g]}),{})}}},ve={class:"status"};function ye(e,h,n,g,_,a){const c=o("charge-point-sum-card"),d=o("charge-point-card"),p=o("counter-card"),r=o("inverter-sum-card"),f=o("inverter-card"),y=o("battery-sum-card"),O=o("battery-card"),j=o("vehicle-card");return l(),N("div",ve,[b(" all charge points "),a.numChargePointsInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),u(c,{key:0})):b("v-if",!0),b(" individual charge points "),(l(!0),N(q,null,L(a.installedChargePoints,(v,P)=>(l(),u(d,{key:P,installedChargePoint:v,installedChargePointKey:P},null,8,["installedChargePoint","installedChargePointKey"]))),128)),b(" counters "),(l(!0),N(q,null,L(a.counterConfigs,v=>(l(),u(p,{key:v.id,counter:v},null,8,["counter"]))),128)),b(" all inverters "),a.numInvertersInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),u(r,{key:1})):b("v-if",!0),b(" individual inverters "),(l(!0),N(q,null,L(a.inverterConfigs,v=>(l(),u(f,{key:v.id,inverter:v},null,8,["inverter"]))),128)),b(" all batteries "),a.numBatteriesInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),u(y,{key:2})):b("v-if",!0),b(" individual batteries "),(l(!0),N(q,null,L(a.batteryConfigs,v=>(l(),u(O,{key:v.id,battery:v},null,8,["battery"]))),128)),b(" vehicles "),(l(!0),N(q,null,L(a.vehicleNames,(v,P)=>(l(),u(j,{key:P,vehicleKey:P,vehicleName:v},null,8,["vehicleKey","vehicleName"]))),128))])}const Te=x(fe,[["render",ye],["__scopeId","data-v-051028a3"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/Status.vue"]]);export{Te as default};
