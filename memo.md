handleChange = event => {
	this.setState({ hoge: hoge})
}
の場合

onChange={this.handleChange}
とすることで勝手にeventを要素から探し引数に取ってくれる



example.jsにて
export XXXXXXX
export default YYYYYY
の場合

import example from './example'
とすると

YYYYYYがインポートされる

狙い撃ちしたい場合は

import {XXXXXX} from './example'
と書けば良い

この書き方だとparamsが受け取れない
<Route exact path='/hogehoge/:id' render={() => <hogehoge/> }  />

<Route exact path='/hogehoge/:id' component={hogehoge} />
この書き方だとOK



"question_content" : {
	"1" : {
		"content_1" : {
			"id" : "1",
	}
}

このような場合
database.ref("question_content").orderByChild('id')
はnull

orderByChildは一階層しか貫通できない

"question_content" : {
	"1" : {
	"content_1" : {
		"id" : "1",
}

これで取得できる

Object.assign(元となるオブジェクト, マージするオブジェクト)
第三以降の引数もマージするオブジェクト
example:
const hoge = { hoge: 'hoge'}
const unko = Object.assign({}, hoge)



初期化メソッドをコードの洗礼を目的に２つのところで書かない
-必ず、初期化メソッドは一度しか実行しない-



firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
初期化したfirebase(firebaseApp)とは別に
'firebase/app';からインポートしてそれをsetPersistenceの引数に渡すメソッドしなければならない



stateを参照する際に

function hoge() {
	this.setState({hoge : true})
}
これはsetState が　Typeerrorとなる
この関数をアロー関数にすることによってsetStateが通る


アロ-=>にはthisを渡すという意味がある

class CountUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick(e) {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return(
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.count}
      </button>
    );
  }
}

この例ではCountUp

App.js
<ConnectedRouter history={history}>
	<div>
		<Route path='/' component={Root}/>
	</div>
</ConnectedRouter>

Root
<MenuBar/>
<Switch>
	<Route exact path={`${url}`} component={Home} />
	<Route path={`${url}question/:questionId`} component={Question} />
	<Route path={`${url}result`} component={Result}  />
	<Route exact path={`${url}list`} component={List} />
</Switch>


Appの<Route path='/' component={Root}/>にexactをつけるとurlが/の時しかrenderしなくなるのでexactはつけてはいけない。
しかし、exactをつけないと
<Route path='/' component={Root}/>
<Route path='/SignupSuccess' component={SignupSuccess}/>
となった際/にしかrenderしなくなるので

<Route path='/SignupSuccess' component={SignupSuccess}/>
<Route path='/' component={Root}/>

このように/のパスを最後に判定するように書かなければならない

Objectは順番付されていない要素の集合

catchはエラーが起こることが予想される階層の所に書く(入れ子の場合)
