(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1130:function(e,t,a){"use strict";a.r(t);var n=a(66),l=a(67),o=a(70),r=a(68),s=a(69),c=a(72),i=a(1),p=a.n(i),m=a(176),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).toggle=a.toggle.bind(Object(c.a)(Object(c.a)(a))),a.state={popoverOpen:!1},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return p.a.createElement("span",null,p.a.createElement(m.e,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),p.a.createElement(m.eb,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},p.a.createElement(m.gb,null,"Popover Title"),p.a.createElement(m.fb,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),t}(i.Component),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).toggle=a.toggle.bind(Object(c.a)(Object(c.a)(a))),a.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(m.i,null,p.a.createElement(m.n,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Popovers"),p.a.createElement("div",{className:"card-header-actions"},p.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},p.a.createElement("small",{className:"text-muted"},"docs")))),p.a.createElement(m.j,null,p.a.createElement(m.e,{id:"Popover1",onClick:this.toggle},"Launch Popover"),p.a.createElement(m.eb,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},p.a.createElement(m.gb,null,"Popover Title"),p.a.createElement(m.fb,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),p.a.createElement(m.i,null,p.a.createElement(m.n,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Popovers"),p.a.createElement("small",null," list")),p.a.createElement(m.j,null,this.state.popovers.map(function(e,t){return p.a.createElement(u,{key:t,item:e,id:t})}))))}}]),t}(i.Component);t.default=g}}]);
//# sourceMappingURL=41.b55860ee.chunk.js.map