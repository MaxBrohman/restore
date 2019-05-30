(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(48)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),l=n(7),u=n(12),i=n(10),s=n(11),m=n(21),d=n(20),E=n(22),f=(n(39),function(e){var t=e.book,n=e.onAddedToCart,a=t.title,c=t.author,o=t.price,l=t.cover;return r.a.createElement("li",{className:"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:l,alt:"book cover"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("span",{className:"book-title"},a),r.a.createElement("div",{className:"book-author"},c),r.a.createElement("div",{className:"book-price"},"$",o),r.a.createElement("button",{className:"btn btn-info add-to-cart",onClick:n},"Add to cart")))}),b=r.a.createContext(),p=b.Provider,O=b.Consumer,h=function(){return function(e){return function(t){return r.a.createElement(O,null,function(n){return r.a.createElement(e,Object.assign({},t,{bookstore:n}))})}}},v=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},k=function(e,t){return function(){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then(function(e){return t({type:"FETCH_BOOKS_SUCCESS",payload:e})}).catch(function(e){return t(function(e){return{type:"FETCH_BOOKS_FAILURE",payload:e}}(e))})}},C=function(){return r.a.createElement("div",null)},_=function(){return r.a.createElement("div",null,"loading...")},T=(n(40),function(e){var t=e.books,n=e.onAddedToCart;return r.a.createElement("ul",{className:"book-list"},t.map(function(e){return r.a.createElement(f,{book:e,key:e.id,onAddedToCart:function(){n(e.id)}})}))}),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,c=e.onAddedToCart;return a?r.a.createElement(C,null):n?r.a.createElement(_,null):r.a.createElement(T,{books:t,onAddedToCart:c})}}]),t}(r.a.Component),j=h()(Object(l.b)(function(e){return{books:e.books,loading:e.loading,error:e.error}},function(e,t){var n=t.bookstore;return{fetchBooks:k(n,e),onAddedToCart:function(t){return e(v(t))}}})(g)),y=function(){return r.a.createElement("div",null,r.a.createElement(j,null))},N=(n(41),Object(l.b)(function(e){return{items:e.cartItems,total:e.orderTotal}},function(e){return{onDecrease:function(t){return e(function(e){return{type:"BOOK_CART_COUNT_DECREASED",payload:e}}(t))},onIncrease:function(t){return e(v(t))},onDelete:function(t){return e(function(e){return{type:"BOOK_DELETED_FROM_CART",payload:e}}(t))}}})(function(e){var t=e.items,n=e.total,a=e.onIncrease,c=e.onDecrease,o=e.onDelete;return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Item"),r.a.createElement("th",{scope:"col"},"Count"),r.a.createElement("th",{scope:"col"},"Price"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",null,t.map(function(e,t){var n=e.id,l=e.name,u=e.count,i=e.total;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t+1),r.a.createElement("td",null,l),r.a.createElement("td",null," ",u),r.a.createElement("td",null,"$",i),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-outline-danger btn-sm",onClick:function(){o(n)}},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{className:"btn btn-outline-success btn-sm",onClick:function(){a(n)}},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{className:"btn btn-outline-warning btn-sm",onClick:function(){1!==u?c(n):o(n)}},r.a.createElement("i",{className:"fa fa-minus-circle"}))))}))),r.a.createElement("div",{className:"total"},"Total: $",n))})),I=function(){return r.a.createElement(N,null)},S=n(8),A=(n(42),Object(l.b)(function(e){var t=e.cartItems,n=e.orderTotal;return{itemsNumber:t.reduce(function(e,t){return e+t.count},0),total:n}})(function(e){var t=e.itemsNumber,n=e.total;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(u.b,{to:"/restore/"},r.a.createElement("div",{className:"logo"},"ReStore")),r.a.createElement(u.b,{to:"/restore/cart/"},r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",n,")")))})),D=function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(A,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/restore/",component:y,exact:!0}),r.a.createElement(S.a,{path:"/restore/cart/",component:I})))},B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={error:!1},e}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement(C,null):this.props.children}}]),t}(r.a.Component),R=function(){function e(){Object(i.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,cover:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,cover:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(s.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise(function(t){setTimeout(function(){t(e.data)},700)})}}]),e}(),w=n(19),K=n(9),F=n(13),U={books:[],loading:!0,error:null,cartItems:[],orderTotal:0},L=function(e,t,n,a){return n>-1?(t.count=a?e[n].count-1:e[n].count+1,t.total=t.price*t.count,[].concat(Object(F.a)(e.slice(0,n)),[t],Object(F.a)(e.slice(n+1)))):[].concat(Object(F.a)(e),[t])},H=function(e){return e.reduce(function(e,t){return e+t.total},0)},M=function(e,t){return e.cartItems.findIndex(function(e){return e.id===t})},x=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_BOOKS_REQUEST":return Object(K.a)({},t,{loading:!0,error:null});case"FETCH_BOOKS_SUCCESS":return Object(K.a)({},t,{books:n.payload,loading:!1,error:null});case"FETCH_BOOKS_FAILURE":return Object(K.a)({},t,{loading:!1,error:n.payload});case"BOOK_ADDED_TO_CART":var a=function(e,t){var n=t.find(function(t){return t.id===e});return{id:n.id,name:n.title,count:1,total:n.price,price:n.price}}(n.payload,t.books);return e=L(t.cartItems,a,M(t,a.id)),Object(K.a)({},t,{cartItems:e,orderTotal:H(e)});case"BOOK_CART_COUNT_DECREASED":var r=M(t,n.payload);return e=L(t.cartItems,t.cartItems[r],r,!0),Object(K.a)({},t,{cartItems:e,orderTotal:H(e)});case"BOOK_DELETED_FROM_CART":var c=M(t,n.payload);return e=[].concat(Object(F.a)(t.cartItems.slice(0,c)),Object(F.a)(t.cartItems.slice(c+1))),Object(K.a)({},t,{cartItems:e,orderTotal:H(e)});default:return t}},J=Object(w.b)(x),P=new R;o.a.render(r.a.createElement(l.a,{store:J},r.a.createElement(B,null,r.a.createElement(p,{value:P},r.a.createElement(u.a,null,r.a.createElement(D,null))))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2036c892.chunk.js.map