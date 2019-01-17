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
