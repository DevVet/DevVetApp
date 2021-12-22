<script lang="ts">
	import { swipe } from 'svelte-gestures';

	export let width = '187.48265mm';

	let direction;
	let target;

	function handler(event) {
		console.log(event.detail);
		direction = event.detail.direction;
		target = event.detail.target;
	}
</script>

<svg
	{width}
	height="284.92801mm"
	viewBox="0 0 187.48265 284.92801"
	version="1.1"
	id="svg5"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:svg="http://www.w3.org/2000/svg"
	use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
	on:swipe={handler}
>
	<defs id="defs2" />
	<g id="layer1" transform="translate(-9.9523859,-5.7635908)">
		<path
			style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 169.06874,108.87606 V 270.93337"
			id="path3032"
		/>
		<rect
			style="fill:none;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"
			id="rect2917"
			width="32.146873"
			height="26.722916"
			x="152.66458"
			y="81.888542"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="M 169.06874,82.153126 V 54.504168 H 39.026041 v 4.233334 76.067728"
			id="path1430"
		/>
		<rect
			style="fill:none;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"
			id="rect1454"
			width="31.220833"
			height="27.384375"
			x="23.283333"
			y="134.93745"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 38.629167,162.45419 v 78.58124"
			id="path1489"
		/>
		<rect
			style="fill:none;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"
			id="rect2504"
			width="31.353125"
			height="26.590624"
			x="23.283333"
			y="240.5062"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 38.629166,267.03075 v 3.63803"
			id="path2619"
		/>
		<rect
			style="fill:none;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none"
			id="rect1293"
			width="38.259632"
			height="52.852547"
			x="84.002808"
			y="82.468498"
		/>
		<path
			style="fill:none;stroke:#000000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			d="m 103.71667,25.135419 c 0,24.870833 0,245.797931 0,245.797931 h -0.26459"
			id="path1019"
		/>
		<rect
			style="fill:#343A40;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846"
			width="56.591099"
			height="19.414463"
			x="75.411278"
			y="6.2635908"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="103.53552"
			y="14.111983"
			id="text3138"
			><tspan
				id="tspan3136"
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.53552"
				y="14.111983"
				>Web
			</tspan><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.53552"
				y="19.403645"
				id="tspan4268">Fundementals</tspan
			></text
		>
		<rect
			style="fill:#343A40;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3"
			width="56.591099"
			height="19.414463"
			x="75.424088"
			y="32.028061"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="103.89697"
			y="39.876465"
			id="text3138-9"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.89697"
				y="39.876465"
				id="tspan4268-7">Version</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.89697"
				y="45.168129"
				id="tspan12313">Control</tspan
			></text
		>
		<rect
			style="fill:#a70000;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5"
			width="56.591099"
			height="19.414463"
			x="10.452386"
			y="59.110382"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="38.925282"
			y="66.958778"
			id="text3138-9-5"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="38.925282"
				y="66.958778"
				id="tspan4268-7-5">Intermediate</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="38.925282"
				y="72.250443"
				id="tspan12313-8">JavaScript</tspan
			></text
		>
		<rect
			style="fill:#a70000;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5"
			width="56.591099"
			height="19.414463"
			x="10.452386"
			y="85.568703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="38.925278"
			y="93.417099"
			id="text3138-9-5-6"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="38.925278"
				y="93.417099"
				id="tspan4268-7-5-7">Intermediate</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="38.925278"
				y="98.708763"
				id="tspan12313-8-8">CSS</tspan
			></text
		>
		<rect
			style="fill:#a70000;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5"
			width="56.591099"
			height="19.414463"
			x="10.452386"
			y="112.02703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="38.925278"
			y="124.10878"
			id="text3138-9-5-6-3"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="38.925278"
				y="124.10878"
				id="tspan12313-8-8-7">Build Tools</tspan
			></text
		>
		<rect
			style="fill:#a70000;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-83"
			width="56.591099"
			height="19.414463"
			x="10.452386"
			y="270.77713"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="38.925278"
			y="282.85886"
			id="text3138-9-5-6-3-10"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="38.925278"
				y="282.85886"
				id="tspan12313-8-8-7-0">TypeScript</tspan
			></text
		>
		<rect
			style="fill:#1200c7;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-09"
			width="56.591099"
			height="19.414463"
			x="75.191605"
			y="138.48534"
		/>
		<rect
			style="fill:#1200c7;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-09-2"
			width="56.591099"
			height="19.414463"
			x="75.191605"
			y="244.31874"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="103.6645"
			y="252.69624"
			id="text3138-9-5-6-3-2-9"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.6645"
				y="252.69624"
				id="tspan12313-8-8-7-4-7">Design / Development</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.6645"
				y="257.98792"
				id="tspan140864">Principles</tspan
			></text
		>
		<rect
			style="fill:#066b0c;fill-opacity:1;stroke:#001001;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-09-2-9"
			width="121.74342"
			height="19.414463"
			x="75.191605"
			y="270.77713"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="135.41443"
			y="282.32968"
			id="text3138-9-5-6-3-2-9-9"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="135.41443"
				y="282.32968"
				id="tspan12313-8-8-7-4-7-4">Infrastructure as Code</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="135.41443"
				y="287.62134"
				id="tspan140864-4"
			/></text
		>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="103.6645"
			y="150.56709"
			id="text3138-9-5-6-3-2"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.6645"
				y="150.56709"
				id="tspan12313-8-8-7-4">Databases</tspan
			></text
		>
		<rect
			style="fill:#066b0c;fill-opacity:1;stroke:#001001;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-09-1"
			width="121.7354"
			height="19.398441"
			x="75.199615"
			y="164.95171"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="135.94359"
			y="177.02545"
			id="text3138-9-5-6-3-2-2"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="135.94359"
				y="177.02545"
				id="tspan12313-8-8-7-4-8">Networking, Security, &amp; Protocols</tspan
			></text
		>
		<rect
			style="fill:#a11ece;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-8"
			width="121.33031"
			height="19.414463"
			x="10.452386"
			y="191.40205"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="71.191612"
			y="203.48381"
			id="text3138-9-5-6-3-22"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="71.191612"
				y="203.48381"
				id="tspan12313-8-8-7-64">APIs</tspan
			></text
		>
		<rect
			style="fill:#a11ece;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-8-3"
			width="121.33031"
			height="19.414463"
			x="10.452386"
			y="217.86041"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="71.191612"
			y="229.94217"
			id="text3138-9-5-6-3-22-8"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="71.191612"
				y="229.94217"
				id="tspan12313-8-8-7-64-4">Testing</tspan
			></text
		>
		<rect
			style="fill:#c85858;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0"
			width="25.605949"
			height="19.414463"
			x="10.452386"
			y="138.48534"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="23.177177"
			y="146.84944"
			id="text3138-9-5-6-3-1"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="23.177177"
				y="146.84944"
				id="tspan12313-8-8-7-6">ReactJS</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="23.177177"
				y="152.1411"
				id="tspan45634">Pt 1</tspan
			></text
		>
		<rect
			style="fill:#6F0000;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0"
			width="25.605949"
			height="19.414463"
			x="41.350006"
			y="138.48534"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="54.074799"
			y="146.84944"
			id="text3138-9-5-6-3-1-0"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="54.074799"
				y="146.84944"
				id="tspan12313-8-8-7-6-8">Vue</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="54.074799"
				y="152.1411"
				id="tspan45634-3">Pt 1</tspan
			></text
		>
		<rect
			style="fill:#c85656;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-9"
			width="25.605949"
			height="19.414463"
			x="10.452386"
			y="244.31874"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="23.177177"
			y="252.68285"
			id="text3138-9-5-6-3-1-3"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="23.177177"
				y="252.68285"
				id="tspan12313-8-8-7-6-4">ReactJS</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="23.177177"
				y="257.97452"
				id="tspan45634-7">Pt 2</tspan
			></text
		>
		<rect
			style="fill:#6F0000;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0-9"
			width="25.605949"
			height="19.414463"
			x="41.350006"
			y="244.31874"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="54.074799"
			y="252.68285"
			id="text3138-9-5-6-3-1-0-8"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="54.074799"
				y="252.68285"
				id="tspan12313-8-8-7-6-8-0">Vue</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="54.074799"
				y="257.97452"
				id="tspan45634-3-7">Pt 2</tspan
			></text
		>
		<rect
			style="fill:#6559de;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0-5"
			width="18.026314"
			height="19.414463"
			x="75.191605"
			y="85.568703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="84.237846"
			y="93.932793"
			id="text3138-9-5-6-3-1-0-0"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="84.237846"
				y="93.932793"
				id="tspan12313-8-8-7-6-8-6">Python</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="84.237846"
				y="99.224457"
				id="tspan45634-3-5">Intro</tspan
			></text
		>
		<rect
			style="fill:#1200c7;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0-5-6"
			width="18.026314"
			height="19.414463"
			x="94.496384"
			y="85.568703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="103.71613"
			y="93.932793"
			id="text3138-9-5-6-3-1-0-0-1"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.71613"
				y="93.932793"
				id="tspan12313-8-8-7-6-8-6-9">JS</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.71613"
				y="99.224457"
				id="tspan45634-3-5-6">Intro</tspan
			></text
		>
		<rect
			style="fill:#28207d;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0-5-6-5"
			width="18.026314"
			height="19.414463"
			x="113.75639"
			y="85.568703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="122.46787"
			y="93.932793"
			id="text3138-9-5-6-3-1-0-0-1-0"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="122.46787"
				y="93.932793"
				id="tspan12313-8-8-7-6-8-6-9-4">C#</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="122.46787"
				y="99.224457"
				id="tspan45634-3-5-6-5">Intro</tspan
			></text
		>
		<rect
			style="fill:#6559de;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0-5-3"
			width="18.026314"
			height="19.414463"
			x="75.191605"
			y="112.02703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="84.65094"
			y="122.50777"
			id="text3138-9-5-6-3-1-0-0-9"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="84.65094"
				y="122.50777"
				id="tspan45634-3-5-3">Django</tspan
			></text
		>
		<rect
			style="fill:#1200c7;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0-5-6-1"
			width="18.026314"
			height="19.414463"
			x="94.496384"
			y="112.02703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="103.40632"
			y="122.50777"
			id="text3138-9-5-6-3-1-0-0-1-1"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.40632"
				y="122.50777"
				id="tspan45634-3-5-6-6">Express</tspan
			></text
		>
		<rect
			style="fill:#28207d;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0-5-6-5-9"
			width="18.026314"
			height="19.414463"
			x="113.7564"
			y="112.02703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="122.46787"
			y="122.50777"
			id="text3138-9-5-6-3-1-0-0-1-0-1"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="122.46787"
				y="122.50777"
				id="tspan45634-3-5-6-5-0">.NET</tspan
			></text
		>
		<rect
			style="fill:#1200c7;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-8"
			width="56.591099"
			height="19.414463"
			x="75.191605"
			y="59.110382"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="103.66448"
			y="66.958778"
			id="text3138-9-5-4"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.66448"
				y="66.958778"
				id="tspan4268-7-5-0">OS</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
				x="103.66448"
				y="72.250443"
				id="tspan12313-8-4">Concepts</tspan
			></text
		>
		<rect
			style="fill:#d1da00;fill-opacity:1;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-8-5"
			width="56.591099"
			height="19.414463"
			x="140.34393"
			y="59.110382"
		/>
		<rect
			style="fill:#e5e990;fill-opacity:1;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-3"
			width="25.605949"
			height="19.414463"
			x="140.34393"
			y="85.568703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="153.06873"
			y="96.578659"
			id="text3138-9-5-6-3-1-7"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="153.06873"
				y="96.578659"
				id="tspan12313-8-8-7-6-2">PowerShell</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="153.06873"
				y="101.87032"
				id="tspan45634-38"
			/></text
		>
		<rect
			style="fill:#aaaf27;fill-opacity:1;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-5-5-0-0-3"
			width="25.605949"
			height="19.414463"
			x="171.24155"
			y="85.568703"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="183.96634"
			y="96.578659"
			id="text3138-9-5-6-3-1-0-5"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:3px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="183.96634"
				y="96.578659"
				id="tspan12313-8-8-7-6-8-1">Bash</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="183.96634"
				y="101.87032"
				id="tspan45634-3-54"
			/></text
		>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="168.81685"
			y="66.958778"
			id="text3138-9-5-4-0"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="168.81685"
				y="66.958778"
				id="tspan4268-7-5-0-2">Managing</tspan
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="168.81685"
				y="72.250443"
				id="tspan12313-8-4-1">Servers</tspan
			></text
		>
		<rect
			style="fill:#d1da00;fill-opacity:1;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-8-5-2"
			width="56.591099"
			height="19.414463"
			x="140.34393"
			y="191.40205"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="168.81685"
			y="202.42542"
			id="text3138-9-5-4-0-5"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="168.81685"
				y="202.42542"
				id="tspan12313-8-4-1-2">Servers</tspan
			></text
		>
		<rect
			style="fill:#d1da00;fill-opacity:1;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-8-5-2-2"
			width="56.591099"
			height="19.414463"
			x="140.34393"
			y="217.86041"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="168.81685"
			y="228.88377"
			id="text3138-9-5-4-0-5-9"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="168.81685"
				y="228.88377"
				id="tspan12313-8-4-1-2-4">Monitoring</tspan
			></text
		>
		<rect
			style="fill:#d1da00;fill-opacity:1;stroke:#00050a;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
			id="rect846-3-5-8-5-2-3"
			width="56.591099"
			height="19.414463"
			x="140.34393"
			y="244.31874"
		/>
		<text
			xml:space="preserve"
			style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;line-height:1.25;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
			x="168.81686"
			y="255.34209"
			id="text3138-9-5-4-0-5-5"
			><tspan
				style="font-style:normal;font-variant:normal;font-weight:800;font-stretch:normal;font-size:4.23333px;font-family:'Nunito Sans';-inkscape-font-specification:'Nunito Sans, Ultra-Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-align:center;text-anchor:middle;stroke-width:0.264583"
				x="168.81686"
				y="255.34209"
				id="tspan12313-8-4-1-2-6">The Cloud</tspan
			></text
		>
	</g>
</svg>
