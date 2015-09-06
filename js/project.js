/**
 * customizer.js
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );
	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					'clip': 'auto',
					'color': to,
					'position': 'relative'
				} );
			}
		} );
	} );
} )( jQuery );

!function($){wp.customize("blogname",function(value){value.bind(function(to){$(".site-title a").text(to)})}),wp.customize("blogdescription",function(value){value.bind(function(to){$(".site-description").text(to)})}),wp.customize("header_textcolor",function(value){value.bind(function(to){"blank"===to?$(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):$(".site-title, .site-description").css({clip:"auto",color:to,position:"relative"})})})}(jQuery);
/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens and enables tab
 * support for dropdown menus.
 */
( function() {
	var container, button, menu, links, subMenus;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );
	subMenus = menu.getElementsByTagName( 'ul' );

	// Set menu items with submenus to aria-haspopup="true".
	for ( var i = 0, len = subMenus.length; i < len; i++ ) {
		subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
	}

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}
} )();

!function(){function toggleFocus(){for(var self=this;-1===self.className.indexOf("nav-menu");)"li"===self.tagName.toLowerCase()&&(-1!==self.className.indexOf("focus")?self.className=self.className.replace(" focus",""):self.className+=" focus"),self=self.parentElement}var container,button,menu,links,subMenus;if(container=document.getElementById("site-navigation"),container&&(button=container.getElementsByTagName("button")[0],"undefined"!=typeof button)){if(menu=container.getElementsByTagName("ul")[0],"undefined"==typeof menu)return void(button.style.display="none");menu.setAttribute("aria-expanded","false"),-1===menu.className.indexOf("nav-menu")&&(menu.className+=" nav-menu"),button.onclick=function(){-1!==container.className.indexOf("toggled")?(container.className=container.className.replace(" toggled",""),button.setAttribute("aria-expanded","false"),menu.setAttribute("aria-expanded","false")):(container.className+=" toggled",button.setAttribute("aria-expanded","true"),menu.setAttribute("aria-expanded","true"))},links=menu.getElementsByTagName("a"),subMenus=menu.getElementsByTagName("ul");for(var i=0,len=subMenus.length;len>i;i++)subMenus[i].parentNode.setAttribute("aria-haspopup","true");for(i=0,len=links.length;len>i;i++)links[i].addEventListener("focus",toggleFocus,!0),links[i].addEventListener("blur",toggleFocus,!0)}}();
/**
 * skip-link-focus-fix.js
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://github.com/Automattic/gridmat/pull/136
 */
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();

!function(){var is_webkit=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,is_opera=navigator.userAgent.toLowerCase().indexOf("opera")>-1,is_ie=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(is_webkit||is_opera||is_ie)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var element,id=location.hash.substring(1);/^[A-z0-9_-]+$/.test(id)&&(element=document.getElementById(id),element&&(/^(?:a|select|input|button|textarea)$/i.test(element.tagName)||(element.tabIndex=-1),element.focus()))},!1)}();