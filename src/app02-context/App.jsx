import React from 'react';
import {ThemeContext, themes} from './modules/theme-context';
import ThemedButton from './modules/theme-button';
import './App.css';

// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div style={{height: '500px', height: '500px'}}>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton />
        </div>

        <div className={'div-li'}>
          <p className={'list-container'}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </p>
          <span className={'span-ele'}>heihei</span>
          <div className={'under-span'}>under span</div>
          <span>haha</span>
        </div>

        <div className={'div-block'}>
          <span>11</span>
          <span>22</span>
          <span>33</span>
          <span>44</span>
        </div>
      </div>
    );
  }
}
