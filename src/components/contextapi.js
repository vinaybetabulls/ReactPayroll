import React from 'react';
const Context = React.createContext();


export class Provider extends React.Component {

  state = {
    employee: {
      employeeName: 'Mani',
      age: 30
    },
    dispatch: (action) => {
      let data = this.reducer(this.state, action)
      console.log('after dispatch..', data)
      this.setState({
        state: {
          employee: {
            employeeName: data.employeeName
          }
        }
      })
    }
  }

  reducer = (state, action) => {
    console.log('reducer state....', state)
    switch (action.type) {
      case 'changestate':
        console.log(Object.assign({}, this.state.employee, { employeeName: action.payload.name, age: 25 }))
        return Object.assign({}, this.state.employee, { employeeName: action.payload.name, age: 25 })

      default:
        return this.state
    }
  }
  render() {

    { console.log('render.... ', this.state); }
    return (
      <Context.Provider value={{ employee: this.state.employee, dispatch: this.state.dispatch }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer; 