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
