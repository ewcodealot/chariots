const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Car,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Car.Acts.SimulateControl,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame
	];
};
self.C3_JsPropNameTable = [
	{Ground: 0},
	{Solid: 0},
	{Bleachers: 0},
	{ScrollTo: 0},
	{Car: 0},
	{Player: 0},
	{Coin: 0},
	{Play: 0},
	{Title: 0},
	{Mouse: 0},
	{Green: 0},
	{Blue: 0},
	{Instructions: 0},
	{EndText: 0},
	{Rock: 0},
	{Keyboard: 0},
	{Coins: 0},
	{Color: 0}
];

self.InstanceType = {
	Ground: class extends self.ITiledBackgroundInstance {},
	Bleachers: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	Play: class extends self.ISpriteInstance {},
	Title: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	Green: class extends self.ISpriteInstance {},
	Blue: class extends self.ISpriteInstance {},
	Instructions: class extends self.ITextInstance {},
	EndText: class extends self.ITextInstance {},
	Rock: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {}
}