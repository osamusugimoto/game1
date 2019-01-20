mp = null;   // MainPanel オブジェクト

			//
			// MainPanel の開始
			//
function mp_start()
{
					// キャンバス情報
	var canvas = document.getElementById('canvas_e');   // キャンバス要素の取得
	var ctx    = canvas.getContext('2d');   // キャンバスからコンテキストを取得
					// MainPanel オブジェクト
	mp = new MainPanel(canvas, ctx);
					// StartPanel の表示
	st_start();
}
			//
			// MainPanel オブジェクト（プロパティ）
			//
function MainPanel(canvas, ctx)
{
	this.canvas = canvas;   // キャンバス要素
	this.ctx    = ctx;   // キャンバスのコンテキスト
	this.level  = 1;   // ゲームレベル
	return this;
}
			//
			// MainPanel オブジェクト（メソッド）
			//
MainPanel.prototype.finish = function()
{
					// キャンバスのクリア
	mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
					// ボタンを非表示
	document.getElementById('method').style.display = "none";
	document.getElementById('start').style.display = "none";
	document.getElementById('first').style.display = "none";
	document.getElementById('finish').style.display = "none";
	document.getElementById('left').style.display = "none";
	document.getElementById('right').style.display = "none";
}