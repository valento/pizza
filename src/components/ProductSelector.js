import React from 'react';

 class ProductSelector extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       'item': '',
       'counter': 0
     }
     console.log(this.props.data.initData.itemList);
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   };

   onChange(e) {
     this.setState({[e.target.name]: e.target.value});
   };

   onSubmit(e) {
     e.preventDefault();
     console.log(e.type);
   };
   onAdd(e) {
     //push this item in global state
     console.log(e.type);
   }

   render() {
     const {items} = this.props.data;
     return (
           <form onSubmit={this.onSubmit}>
             <div id='order_input' className='form-row'>

               <div className='form-group col-7'>
                 <select
                   name='item'
                   onChange={this.onChange}
                   className="form-control m-xs-0">
                   <option selected>Избери...</option>
                    this.props.
                   <option value="Pizza One ID">Pizza One</option>
                   <option value="Pizza Two ID">Pizza Two</option>
                   <option value="Pizza Three ID">Pizza Three</option>
                 </select>
               </div>

               <div className='form-group col-3'>
                 <select
                   name='counter'
                   onChange={this.onChange}
                   className='form-control'>
                   <option value="1" selected>1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                 </select>
               </div>

               <div className='form-group col-2'>
                 <button type="submit" className="btn btn-primary btn-block">+</button>
               </div>

             </div>
           </form>

     )
  };

}
export default ProductSelector
