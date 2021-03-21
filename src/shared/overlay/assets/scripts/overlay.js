import { createElement, Fragment } from 'jsx-dom'

export default function ({ fastForward }) {
	return (
		<div className="v-overlayVideo" data-v-toggle-play-pause>
			{fastForward && (
				<>
					<div className="v-overlayLeft" data-v-fast-forward data-direction="left"></div>
					<div className="v-overlayRight" data-v-fast-forward data-direction="right"></div>
				</>
			)}
		</div>
	)
}