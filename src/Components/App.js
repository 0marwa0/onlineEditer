
import React from "react"
import Editor from "./Editor";
function App() {
	return (
		<div className="pane top-pane">
			<Editor /*HTML code editor*/ />
			<Editor /*CSS code editor*/ />
			<Editor /*JS code editor*/ />
		</div>
	);
}

export default App;
