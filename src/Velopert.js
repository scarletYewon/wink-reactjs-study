import React, { Component } from 'react';
import PhoneForm from './Component_velopert/PhoneForm';
import PhoneInfoList from './Component_velopert/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '박정명',
        phone: '010-1919-1919'
      },
      {
        id: 1,
        name: '라마리럐뤈릴꿜?',
        phone: '010-2121-2121'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;