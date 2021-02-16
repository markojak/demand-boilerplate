import React from 'react';

function Dekaeder(props) {
	const title = props.title || "Dekaeder";

	return (
		<svg height="30" width="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M17.361 12.109l-.717.788a.5.5 0 0 0 .74.673l.717-.788a.5.5 0 0 0-.74-.673zm-1.537-1.092h.002l1.059-.005a.5.5 0 0 0-.002-1h-.002l-1.059.005a.5.5 0 0 0 .002 1zm-3.177.015h.002l1.059-.005a.5.5 0 0 0-.002-1h-.002l-1.059.005a.5.5 0 0 0 .002 1zm8.781.777l.824.33a.497.497 0 0 0 .649-.278.5.5 0 0 0-.278-.65l-.824-.33a.5.5 0 1 0-.371.928zm-3.291-4.11l.247.822a.5.5 0 0 0 .957-.288l-.247-.822a.5.5 0 0 0-.957.288zm.727 2.331a.493.493 0 0 0-.364.475.494.494 0 0 0 .168.366.497.497 0 0 0 .496.499c.016 0 .032-.008.048-.01a.495.495 0 0 0 .394.135.497.497 0 0 0 .411-.325.484.484 0 0 0 .409-.3.5.5 0 0 0-.278-.65l-.239-.096-.075-.248a.494.494 0 1 0-.97.154zm5.037 2.769l.825.33a.499.499 0 0 0 .649-.279.5.5 0 0 0-.278-.65l-.825-.33a.5.5 0 0 0-.371.929zm-6.257-6.744a.5.5 0 1 0 .957-.288l-.246-.822a.5.5 0 1 0-.957.288l.246.822zm2.577 11.797a.499.499 0 0 0 .498-.552l-.111-1.059a.499.499 0 1 0-.994.104l.111 1.059a.5.5 0 0 0 .496.448zm-.273 1.67l.111 1.059a.5.5 0 1 0 .994-.104l-.111-1.059a.499.499 0 1 0-.994.104zm10.05-5.029a.493.493 0 0 0-.122-.312l-.001-.002c-.005-.005-.004-.013-.009-.018l-.015-.016-.001-.001L16.879.174l-.012-.013c-.025-.026-.055-.044-.084-.063-.018-.012-.032-.029-.051-.039l-.009-.007c-.017-.008-.034-.007-.051-.014-.013-.005-.027-.006-.04-.011a.518.518 0 0 0-.111-.021l-.05.002c-.017.001-.034.005-.051.007-.021.003-.042-.001-.064.005-.021.006-.036.021-.056.03l-.014.006c-.017.008-.036.011-.052.022l-16 10.087c-.007.004-.008.013-.014.017l-.004.005a.498.498 0 0 0-.161.183c-.003.007-.011.009-.014.017l-.003.012-.001.004v.002a.495.495 0 0 0-.037.184c0 .03.012.056.017.084v.004c.002.01-.004.019-.002.029l4 16.413c.002.009.011.014.013.022l.002.004a.5.5 0 0 0 .133.225c.032.029.069.045.105.065.015.009.028.022.045.029l.004.001c.026.01.054.011.082.017.01.004.017.012.028.013l17 2.5a.565.565 0 0 0 .071.005h.002a.47.47 0 0 0 .271-.087l.003-.002c.013-.008.027-.012.039-.021.015-.012.022-.029.035-.042a.472.472 0 0 0 .061-.073c.007-.011.018-.018.025-.029.002-.004.006-.005.008-.008l8-15c.003-.006.001-.014.004-.02l.004-.015c.003-.007.011-.01.014-.017.019-.047.023-.096.027-.144 0-.015.009-.027.009-.042l-.002-.007zm-2.163-1.051l.518.558h-.634c.049-.048.103-.092.13-.161a.493.493 0 0 0-.014-.397zM16.579 1.458c.023.003.041.021.064.021s.048-.007.072-.011l.684.737a.5.5 0 0 0-.408-.061.5.5 0 0 0-.335.623l.247.822a.5.5 0 0 0 .957-.288l-.247-.822c-.011-.038-.035-.068-.054-.1l10.084 10.859c-.025-.016-.046-.037-.074-.049l-.824-.33a.5.5 0 1 0-.371.929l.531.212h-6.534l-.098-.937a.493.493 0 0 0-.55-.445.499.499 0 0 0-.444.549l.087.833h-9.058l6.271-12.542zm-1.328.42l-4.252 8.505a.495.495 0 0 0-.468-.341h-.002l-1.06.004a.5.5 0 0 0 .002 1h.002l1.06-.004a.484.484 0 0 0 .152-.031l-1.421 2.842-7.698-3.347 13.685-8.628zM1.223 11.446l7.632 3.319-4.239 10.599-3.393-13.918zm4.11 15.171a.496.496 0 0 0-.057-.215l.507-1.268a.493.493 0 0 0 .15.29.498.498 0 0 0 .706-.034l.717-.788a.5.5 0 0 0-.74-.673l-.626.688 3.654-9.135L20.316 28.82 5.333 26.617zm16.127 1.895c-.022 0-.043-.008-.066-.006-.014.001-.025.009-.038.012l-8.22-10.274.667-.734a.5.5 0 1 0-.74-.673l-.56.616L10.54 15h4.192l-.237.261a.5.5 0 1 0 .74.673l.716-.788a.475.475 0 0 0 .087-.146h12.628L21.46 28.512zM20.282 22.7l.112 1.06a.5.5 0 1 0 .994-.106l-.112-1.06a.5.5 0 1 0-.994.106zm-9.715-1.874a.496.496 0 0 0 .37-.164l.716-.788a.499.499 0 1 0-.74-.672l-.716.788a.499.499 0 0 0 .37.836zm-1.803.74l-.716.788a.499.499 0 1 0 .74.672l.716-.788a.499.499 0 1 0-.74-.672zm11.853 4.311l.111 1.059a.5.5 0 1 0 .994-.104l-.111-1.059a.494.494 0 0 0-.55-.445.499.499 0 0 0-.444.549zM7.354 10.056h-.002l-1.059.005a.5.5 0 0 0 .002 1h.002l1.059-.005a.5.5 0 0 0-.002-1zm-3.177.014h-.002l-1.059.005a.5.5 0 0 0 .002 1h.002l1.059-.005a.5.5 0 0 0-.002-1z"/>
	</g>
</svg>
	);
};

export default Dekaeder;