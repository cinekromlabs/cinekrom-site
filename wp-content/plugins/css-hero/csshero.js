// <script>

const queryCheck = s => document.createDocumentFragment().querySelector(s)

const isSelectorValid = selector => {
  try { queryCheck(selector) } catch { return false }
  return true
}

function csshero_apply_ediandsugg(els,sel,desc){
	// ELS MUST BE A JQUERY OBJECT 
	if (els && sel && desc) {
		els.each((w,k)=>{
			k.setAttribute('editableclass',sel)
			k.setAttribute('editablesuggestion',desc)
			k.classList.add('editable')
		})
	}
}

let loadTimeout = null;
function csshero_throttle(callback,delay){
	clearTimeout(loadTimeout);
	loadTimeout = setTimeout(()=>{
		if (callback) callback()  
    },delay);
}


function csshero_declare_item(el,desc){
	if (isSelectorValid(el)){
		el = el.replace(/\s+/g,' ')
		const frame = window.frames['csshero-iframe-main-page'].document;
		const els = frame.querySelectorAll(el)
		els.forEach(e=>{
			e.setAttribute('editableclass',el)
			e.setAttribute('editablesuggestion',desc)
		})
	}
	
}


// POST
function csshero_config_post(scope,inner_scope,prefix){
	if (!prefix){prefix = 'Article';}
	csshero_declare_item(scope,prefix);
	csshero_declare_item(scope+' .entry-header',prefix+' Header');
	csshero_declare_item(scope+' .entry-header .entry-title',prefix+' Header Title');
	csshero_declare_item(scope+' .entry-header .entry-title a',prefix+' Header Title Link');
	csshero_declare_item(scope+' .entry-header .comments-link',prefix+' Header Comments Area');
	csshero_declare_item(scope+' .entry-header .comments-link a',prefix+' Header Comments Area Link');  

	// ENTRY CONTENT HEADINGS
	csshero_declare_item(scope+ ' .page-title',prefix+' Page Title');
	csshero_declare_item(scope+ ' .entry-title',prefix+' Entry Title');
	csshero_declare_item(scope+ ' .entry-title a',prefix+' Entry Title Link');
	csshero_declare_item(scope+' '+ inner_scope+' h1',prefix+' Content h1');
	csshero_declare_item(scope+' '+ inner_scope+' h2',prefix+' Content h2');
	csshero_declare_item(scope+' '+ inner_scope+' h3',prefix+' Content h3');
	csshero_declare_item(scope+' '+ inner_scope+' h4',prefix+' Content h4');
	csshero_declare_item(scope+' '+ inner_scope+' h5',prefix+' Content h5');
	csshero_declare_item(scope+' '+ inner_scope+' h6',prefix+' Content h6');
	
	// ENTRY CONTENT
	csshero_declare_item(scope+' .entry-header img.wp-post-image',prefix+' Entry Header Images');
	csshero_declare_item(scope+' '+ inner_scope,prefix+' Entry Content');
	csshero_declare_item(scope+' '+ inner_scope+' p',prefix+' Content Paragraph');
	csshero_declare_item(scope+' '+ inner_scope+' a',prefix+' Content Links');
	csshero_declare_item(scope+' '+ inner_scope+' blockquote',prefix+' Content Blockquotes');
	csshero_declare_item(scope+' '+ inner_scope+' blockquote p',prefix+' Content Blockquotes Paragraph');

	// ENTRY CONTENT LISTS
	csshero_declare_item(scope+' '+ inner_scope+' ul',prefix+' Unordered List');
	csshero_declare_item(scope+' '+ inner_scope+' ul li',prefix+' Unordered List Item');
	csshero_declare_item(scope+' '+ inner_scope+' ol',prefix+' Ordered List');
	csshero_declare_item(scope+' '+ inner_scope+' ol li',prefix+' Ordered List Item');
	
	csshero_declare_item(scope+' '+ inner_scope+' ins',prefix+' Content Inserted Parts');
	csshero_declare_item(scope+' '+ inner_scope+' del',prefix+' Content Deleted Parts');
	csshero_declare_item(scope+' '+ inner_scope+' img:not(.wp-smiley)',prefix+' Content Images');
	csshero_declare_item(scope+' '+ inner_scope+' img.wp-smiley',prefix+' Content Smiles');

	// ENTRY CONTENT TABLE
	csshero_declare_item(scope+' '+ inner_scope+' table',prefix+' Table Body');
	csshero_declare_item(scope+' '+ inner_scope+' tr',prefix+' Table Row');
	csshero_declare_item(scope+' '+ inner_scope+' td',prefix+' Table Cell');

	// POST FOOTER
	csshero_declare_item(scope+' .entry-meta',prefix+'  Meta Area');
	csshero_declare_item(scope+' .entry-meta a',prefix+'  Meta Link');
	
	// POST TAGS
	csshero_declare_item(scope+' p.tags',prefix + ' Tags Area');
	csshero_declare_item(scope+' p.tags a',prefix + ' Tag');
	
	// IMG CAPTIONS
	csshero_declare_item(scope+' '+ inner_scope+' .wp-caption','Caption Area');
	csshero_declare_item(scope+' '+ inner_scope+' .wp-caption a','Caption Links');
	csshero_declare_item(scope+' '+ inner_scope+' .wp-caption .wp-caption-text','Caption Text');
}

// SIDEBAR
function csshero_config_sidebar(scope,inner_scope,prefix){
	if (!inner_scope){
		inner_scope = '.widget'; /// DEFAULTS TO .widget, MUST BE A CLASS
	}
	
	if (!prefix){
		prefix = 'Sidebar';
	}
	//20140822 - ADDING WOOCOMMERCE COMPATIBILITY
	inner_scope = inner_scope+':not(.woocommerce)';
	
	csshero_declare_item(scope,prefix);
	csshero_declare_item(scope+' h3'+inner_scope+'-title',prefix+' Widget Title');
	csshero_declare_item(scope+' '+inner_scope,prefix+' Widget');
	csshero_declare_item(scope+' '+inner_scope+' ul',prefix+' List Container');
	csshero_declare_item(scope+' '+inner_scope+' ul li',prefix+' List Element');
	csshero_declare_item(scope+' '+inner_scope+' a',prefix+' Links');
	csshero_declare_item(scope+' '+inner_scope+' p',prefix+' Paragraphs');
	csshero_declare_item(scope+' '+inner_scope+' img',prefix+' Image');
	csshero_declare_item(scope+' '+inner_scope+' h1',prefix+' Text Widget h1');
	csshero_declare_item(scope+' '+inner_scope+' h2',prefix+' Text Widget h2');
	csshero_declare_item(scope+' '+inner_scope+' h3:not('+inner_scope+'-title)',prefix+' Text Widget h3');
	csshero_declare_item(scope+' '+inner_scope+' h4',prefix+' Text Widget h4');
	csshero_declare_item(scope+' '+inner_scope+' h5',prefix+' Text Widget h5');
	csshero_declare_item(scope+' '+inner_scope+' h6',prefix+' Text Widget h6');
	csshero_declare_item(scope+' '+inner_scope+' #s',prefix+' Search Input');
	csshero_declare_item(scope+' '+inner_scope+' #searchsubmit',prefix+' Search Submit');
	csshero_declare_item(scope+' '+inner_scope+' #searchform',prefix+' Searchform');
	csshero_declare_item(scope+' '+inner_scope+' input[type="submit"]',prefix+' Submit Button');
	csshero_declare_item(scope+' '+inner_scope+' button',prefix+' Button');
}

function csshero_declare_pseudo(){
	// LEAVE EMPTY NOW
}

// COMMENTS 
	function csshero_config_comments(scope){
	 	if (!scope){scope = '#comments'}
	 	
		csshero_declare_item(scope,'Comments Area');
		csshero_declare_item(scope+' .comments-title','Comments Area Title');
		csshero_declare_item(scope+' #comments-title','Comments Area Title');
		
		csshero_declare_item(scope+' .commentlist li article','Comment');
		csshero_declare_item(scope+' .commentlist li article.comment','Comment');
		csshero_declare_item(scope+' .commentlist li div.comment','Comment');
		
		csshero_declare_item(scope+' .commentlist .pingback','Comment Pingback');
		csshero_declare_item(scope+' .commentlist .comment .comment-author,'+ scope + ' .commentlist .fn','Comment Author');
		csshero_declare_item(scope+' .commentlist .comment .comment-author a','Comment Author Link');
		csshero_declare_item(scope+' .commentlist .comment header','Comment Header');
		csshero_declare_item(scope+' .commentlist .comment time','Comment Date');
		csshero_declare_item(scope+' .commentlist .comment .avatar','Comment Author Avatar');
		csshero_declare_item(scope+' .commentlist .comment-content p','Comment Paragraph');
		
		/// IN CASO DI COMMENT-LIST INVECE DI COMMENTLIST
		csshero_declare_item(scope,'Comments Area');
		csshero_declare_item(scope+' .comments-title','Comments Area Title');
		
		csshero_declare_item(scope+' .comment-list li article','Comment');
		csshero_declare_item(scope+' .comment-list li article.comment','Comment');
		csshero_declare_item(scope+' .comment-list li div.comment','Comment');
		
		csshero_declare_item(scope+' .comment-list .pingback','Comment Pingback');
		csshero_declare_item(scope+' .comment-list .comment .comment-author, '+ scope + ' .comment-list .fn, '+scope+' .comment-list .comment .comment-author a','Comment Author');
		csshero_declare_item(scope+' .comment-list .comment header','Comment Header');
		csshero_declare_item(scope+' .comment-list .comment time','Comment Date');
		csshero_declare_item(scope+' .comment-list .comment .avatar','Comment Author Avatar');
		csshero_declare_item(scope+' .comment-list .comment-content p','Comment Paragraph');
	}
	
	// NEW COMMENTS FN
	
	function new_csshero_config_comments(scope,listname,comment_container){
	 	if (!scope){scope = '#comments'}
	 	
		csshero_declare_item(scope,'Comments Area');
		csshero_declare_item(scope+' .comments-title','Comments Area Title');
		csshero_declare_item(scope+' #comments-title','Comments Area Title');
		
		csshero_declare_item(scope+' '+listname+' '+ comment_container,'Comment');
	
	////////// DEPTH: DA VEDERE ANCORA	
	//	csshero_declare_item(scope+' '+listname+' '+ comment_container+'.depth-2','Comment Depth 2');
	//	csshero_declare_item(scope+' '+listname+' '+ comment_container+'.depth-3','Comment Depth 3');
	//	csshero_declare_item(scope+' '+listname+' '+ comment_container+'.depth-4','Comment Depth 4');
	/////////
	
		csshero_declare_item(scope+' '+listname+' '+ comment_container+'.pingback','Comment Pingback');
		csshero_declare_item(scope+' '+listname+' '+ comment_container+' .comment-author,'+ scope+' '+listname+' '+ comment_container+' .fn','Comment Author');
		csshero_declare_item(scope+' '+listname+' '+ comment_container+' .comment-author a','Comment Author Link');
		csshero_declare_item(scope+' '+listname+' '+ comment_container+' header','Comment Header');
		csshero_declare_item(scope+' '+listname+' '+ comment_container+' time','Comment Date');
		csshero_declare_item(scope+' '+listname+' '+ comment_container+' .avatar','Comment Author Avatar');
		csshero_declare_item(scope+' '+listname+' '+ comment_container+' p','Comment Paragraph');
		csshero_declare_item(scope+' '+listname+' '+ comment_container+' p a','Comment Link');
		csshero_declare_item(scope+' '+listname+' '+ comment_container+' .comment-reply-link','Comment Reply Link');
		csshero_declare_item(scope+' '+listname+' .children','Comment Children Area');
		
	}
	
	function csshero_config_respond(scope,innerscope){
		if (!scope){scope = '#comments'}
		if (!innerscope){innerscope = '#respond'}
		
		csshero_declare_item(scope+' '+innerscope,'Respond Area');
		csshero_declare_item(scope+' '+innerscope+' a','Respond Links');
		csshero_declare_item(scope+' '+innerscope+' #cancel-comment-reply-link','Cancel Reply Link');
		csshero_declare_item(scope+' '+innerscope+' h3#reply-title','Respond Title');
		csshero_declare_item(scope+' '+innerscope+' .logged-in-as','Respond Logged In Text');
		csshero_declare_item(scope+' '+innerscope+' .logged-in-as a','Respond Logged In Text Link');
		csshero_declare_item(scope+' '+innerscope+' .form-allowed-tags','Respond Allowed Comments Tags Area');
		csshero_declare_item(scope+' '+innerscope+' .form-allowed-tags code','Respond Allowed Comments Tags');
		csshero_declare_item(scope+' '+innerscope+'  #submit','Respond Submit Reply');
		csshero_declare_item(scope+' '+innerscope+' .comment-form-comment label','Respond Form Title');
		csshero_declare_item(scope+' '+innerscope+' textarea','Respond Form Textarea');
		csshero_declare_item(scope+' '+innerscope+' input','Respond Form Input');
		csshero_declare_item(scope+' '+innerscope+' input[type=submit]','Respond Form Submit Button');
		csshero_declare_item(scope+' a.comment-reply-link','Comment Reply Link');
	}
	
	// MENU
	function csshero_config_menu(scope,ulscope,prefix){
		if (!ulscope){ulscope= '';}
		if (!prefix){prefix= 'NAV';}
		csshero_declare_item(scope,prefix+' - Navigation Container');
		csshero_declare_item(scope+' ul'+ulscope+' li',prefix+' - Main Menu Element');
		csshero_declare_item(scope+' ul'+ulscope+' li a',prefix+' - Main Menu Link');
		csshero_declare_item(scope+' ul'+ulscope+' li.current-menu-item a',prefix+' - Currently Active Menu Link');
		csshero_declare_item(scope+' ul'+ulscope+' li ul li',prefix+' - Second Level Menu Element');
		csshero_declare_item(scope+' ul'+ulscope+' li ul li a',prefix+' - Second Level Menu Links');
		csshero_declare_item(scope+' ul'+ulscope,prefix+' - Navigation');
		csshero_declare_item(scope+' ul'+ulscope+' .sub-menu',prefix+' Submenu');
		csshero_declare_item(scope+' ul'+ulscope+' .current-menu-item > a, .main-navigation .current-menu-ancestor > a, .main-navigation .current_page_item > a, .main-navigation .current_page_ancestor > a',prefix+' - Current Menu Ancestor Link');
	}window.hero_load_this_config = () => {
	
	// THIS NOW WAITS FOR ALL THE CONFIG ELEMENTS TO BE LOADED
	var csshero_promise = jQuery.Deferred();
	var cssheroframe = window.frames['csshero-iframe-main-page']
window.csshero_theme_is_configurated = false;// CONFIG ELEMENTOR <script>
var frame = window.frames['csshero-iframe-main-page'].document.body;
var generic_inner_stuff = [
	
	// BASIC
	//{des:'Column Wrap',sel:'.elementor-column-wrap'},
	{des:'Heading',sel:'.elementor-heading-title'},
	{sel:'.elementor-image img',des:'Image'},
	{sel:'.hfe-copyright-wrapper span',des:'Elementor Copyright Element'},
	{sel:'.hfe-copyright-wrapper a',des:'Elementor Copyright Link'},
	{sel:'.elementor-button-wrapper .elementor-button',des:'Button'},
	{sel:'.elementor-button-wrapper .elementor-button .elementor-button-text',des:'Button Text'},
	{sel:'.elementor-divider .elementor-divider-separator',des:'Separator'},
	{sel:'.elementor-icon i',des:'Icon'},
	{sel:'.elementor-widget-container',des:'Widget Container'},
	{sel:'.elementor-column-wrap .elementor-column-wrap',des:'Column'},
	{sel:'.elementor-widget-wrap',des:'Widget Wrap'},
	// IMG BOX 
	{sel:'.elementor-image-box-wrapper',des:'Image Box Wrapper'},
	{sel:'.elementor-image-box-wrapper .elementor-image-box-img img',des:'Image Box Img'},
	{sel:'.elementor-image-box-wrapper .elementor-image-box-content',des:'Image Box Content'},
	{sel:'.elementor-image-box-wrapper .elementor-image-box-title',des:'Image Box Title'},
	{sel:'.elementor-image-box-wrapper .elementor-image-box-title a',des:'Image Box Title Link'},
	{sel:'.elementor-image-box-wrapper .elementor-image-box-description',des:'Image Box Description'},
	{sel:'.elementor-image-box-wrapper .elementor-image-box-description a',des:'Image Box Description Link'},
	
	
	// ICON BOX
	
	
	{sel:'.elementor-widget-icon-box .elementor-widget-container',des:'Icon Box Wrapper'},
	{sel:'.elementor-widget-icon-box .elementor-icon-box-icon .elementor-icon',des:'Icon Wrapper'},
	{sel:'.elementor-widget-icon-box .elementor-icon-box-icon i',des:'Icon Box Icon'},
	{sel:'.elementor-widget-icon-box .elementor-icon-box-content',des:'Icon Box Content'},
	{sel:'.elementor-widget-icon-box .elementor-icon-box-title',des:'Icon Box Title'},
	{sel:'.elementor-widget-icon-box .elementor-icon-box-title span',des:'Icon Box Title Span'},
	{sel:'.elementor-widget-icon-box .elementor-icon-box-title a',des:'Icon Box Title Link'},
	{sel:'.elementor-widget-icon-box .elementor-icon-box-description',des:'Icon Box Description'},
	{sel:'.elementor-widget-icon-box .elementor-icon-box-description a',des:'Icon Box Description Link'},
	
	
	
	{sel:'.elementor-icon-box-wrapper',des:'Icon Box Wrapper'},
	{sel:'.elementor-icon-box-wrapper .elementor-icon-box-icon i',des:'Icon Box Icon'},
	{sel:'.elementor-icon-box-wrapper .elementor-icon-box-icon .elementor-icon',des:'Icon Wrapper'},
	{sel:'.elementor-icon-box-wrapper .elementor-icon-box-content',des:'Icon Box Content'},
	{sel:'.elementor-icon-box-wrapper .elementor-icon-box-title',des:'Icon Box Title'},
	{sel:'.elementor-icon-box-wrapper .elementor-icon-box-title span',des:'Icon Box Title Span'},
	{sel:'.elementor-icon-box-wrapper .elementor-icon-box-title a',des:'Icon Box Title Link'},
	{sel:'.elementor-icon-box-wrapper .elementor-icon-box-description',des:'Icon Box Description'},
	{sel:'.elementor-icon-box-wrapper .elementor-icon-box-description a',des:'Icon Box Description Link'},
	
	// GALLERY
	{sel:'.elementor-image-gallery',des:'Gallery'},
	{sel:'.elementor-image-gallery img',des:'Gallery Img'},
	{sel:'.elementor-image-gallery .gallery-item',des:'Gallery Item'},
	{sel:'.elementor-image-gallery .wp-caption-text',des:'Gallery Caption'},
	
	// CAROUSEL
	{sel:'.elementor-image-carousel',des:'Carousel'},
	{sel:'.elementor-image-carousel > button',des:'Carousel Button'},
	{sel:'.elementor-image-carousel img',des:'Carousel Img'},
	{sel:'.elementor-image-carousel .slick-dots',des:'Carousel Pagination Area'},
	{sel:'.elementor-image-carousel .slick-dots li > button',des:'Carousel Pagination Item'},
	
	// ICON LIST
	
	{sel:'.elementor-icon-list-items',des:'List Area'},
	{sel:'.elementor-icon-list-items .elementor-icon-list-icon i',des:'List Text'},
	{sel:'.elementor-icon-list-items .elementor-icon-list-text',des:'List Text'},
	
	// COUNTER
	{sel:'.elementor-counter .elementor-counter-number',des:'Number'},
	{sel:'.elementor-counter .elementor-counter-title',des:'Number Title'},
		
	{sel:'.elementor-counter .elementor-counter-number-prefix',des:'Number Prefix'},
		
	{sel:'.elementor-counter .elementor-counter-number-suffix',des:'Number Suffix'},
	
	
	// PROGRESS
	{sel:'.elementor-widget-progress',des:'Progress Area'},
	{sel:'.elementor-widget-progress .elementor-title',des:'Progress Bar Title'},
	{sel:'.elementor-widget-progress .elementor-progress-bar',des:'Progress Bar'},
	{sel:'.elementor-widget-progress .elementor-progress-text',des:'Progress Bar Text'},
	{sel:'.elementor-widget-progress .elementor-progress-percentage',des:'Progress Bar Percentage'},
	{sel:'.elementor-widget-progress .elementor-progress-wrapper',des:'Progress Bar Wrapper'},
			
	// TESTIMONIAL
	{sel:'.elementor-widget-testimonial',des:'Testimonial'},
	{sel:'.elementor-widget-testimonial .elementor-testimonial-content',des:'Testimonial Content'},
	{sel:'.elementor-widget-testimonial .elementor-testimonial-meta',des:'Testimonial Meta Area'},
	{sel:'.elementor-widget-testimonial .elementor-testimonial-image',des:'Testimonial Img Area'},
	{sel:'.elementor-widget-testimonial .elementor-testimonial-image',des:'Testimonial Img'},
	{sel:'.elementor-widget-testimonial .elementor-testimonial-details',des:'Testimonial Details'},
	{sel:'.elementor-widget-testimonial .elementor-testimonial-details .elementor-testimonial-name',des:'Testimonial Name'},
	{sel:'.elementor-widget-testimonial .elementor-testimonial-details .elementor-testimonial-job',des:'Testimonial Job'},
	
	// TABBER

	{sel:'.elementor-widget-tabs',des:'Tabs'},
	{sel:'.elementor-widget-tabs .elementor-tabs-wrapper',des:'Tabs Head'},
	{sel:'.elementor-widget-tabs .elementor-tabs-wrapper .elementor-tab-title',des:'Tabs Tab'},
	{sel:'.elementor-widget-tabs .elementor-tabs-wrapper .elementor-tab-title.elementor-active',des:'Tabs Tab Active'},
	{sel:'.elementor-widget-tabs .elementor-tab-content',des:'Tabs Content'},
	{sel:'.elementor-widget-tabs .elementor-tab-content a',des:'Tabs Content Links'},
	
				
	// ACCORDION		
	{sel:'.elementor-accordion',des:'Accordion'},
	{sel:'.elementor-accordion .elementor-accordion-item',des:'Accordion Item'},
	{sel:'.elementor-accordion .elementor-tab-title',des:'Accordion Tab Title'},
	{sel:'.elementor-accordion .elementor-tab-title .elementor-accordion-icon i',des:'Accordion Tab Title Icon'},
	{sel:'.elementor-accordion .elementor-tab-title.elementor-active',des:'Accordion Tab Title Active'},
	{sel:'.elementor-accordion .elementor-tab-title.elementor-active .elementor-accordion-icon i',des:'Accordion Tab Title Active Icon'},
	{sel:'.elementor-accordion .elementor-tab-content',des:'Accordion Content'},
	{sel:'.elementor-accordion .elementor-tab-content a',des:'Accordion Content Link'},
	
	
	// TOGGLES
	
	
	{sel:'.elementor-toggle',des:'Toggle'},
	{sel:'.elementor-toggle .elementor-tab-title',des:'Toggle Title'},
	{sel:'.elementor-toggle .elementor-tab-title i',des:'Toggle Title Icon'},
	{sel:'.elementor-toggle .elementor-tab-content',des:'Toggle Content'},
	{sel:'.elementor-toggle .elementor-tab-content a',des:'Toggle Content Link'},
	
	
	// SOCIALS
	{sel:'.elementor-widget-social-icons',des:'Socials Wrapper'},
	{sel:'.elementor-widget-social-icons a',des:'Socials Item'},
	
	// ALERTS
	
	{sel:'.elementor-alert.elementor-alert-info',des:'Alert Info'},
	{sel:'.elementor-alert.elementor-alert-info .elementor-alert-title',des:'Alert Info Title'},
	{sel:'.elementor-alert.elementor-alert-info .elementor-alert-description',des:'Alert Info Contents'},
	{sel:'.elementor-alert.elementor-alert-info .elementor-alert-dismiss',des:'Alert Info Dismiss'},
	{sel:'.elementor-alert.elementor-alert-success',des:'Alert success'},
	{sel:'.elementor-alert.elementor-alert-success .elementor-alert-title',des:'Alert success Title'},
	{sel:'.elementor-alert.elementor-alert-success .elementor-alert-description',des:'Alert success Contents'},
	{sel:'.elementor-alert.elementor-alert-success .elementor-alert-dismiss',des:'Alert success Dismiss'},
	{sel:'.elementor-alert.elementor-alert-warning',des:'Alert warning'},
	{sel:'.elementor-alert.elementor-alert-warning .elementor-alert-title',des:'Alert warning Title'},
	{sel:'.elementor-alert.elementor-alert-warning .elementor-alert-description',des:'Alert warning Contents'},
	{sel:'.elementor-alert.elementor-alert-warning .elementor-alert-dismiss',des:'Alert warning Dismiss'},
	{sel:'.elementor-alert.elementor-alert-danger',des:'Alert danger'},
	{sel:'.elementor-alert.elementor-alert-danger .elementor-alert-title',des:'Alert danger Title'},
	{sel:'.elementor-alert.elementor-alert-danger .elementor-alert-description',des:'Alert danger Contents'},
	{sel:'.elementor-alert.elementor-alert-danger .elementor-alert-dismiss',des:'Alert danger Dismiss'},		
	
	// POSTS
	{sel:'.elementor-widget-posts ',des:'Posts Area'},
	{sel:'.elementor-widget-posts .elementor-post',des:'Post'},
	{sel:'.elementor-widget-posts .elementor-post__thumbnail img',des:'Post Img'},
	{sel:'.elementor-widget-posts .elementor-post__text',des:'Posts Text Area'},
	{sel:'.elementor-widget-posts .elementor-post__title a',des:'Post Title Link'},
	{sel:'.elementor-widget-posts .elementor-post__meta-data',des:'Post Meta Area'},
	{sel:'.elementor-widget-posts .elementor-post__meta-data span',des:'Post Meta Item'},
	{sel:'.elementor-widget-posts .elementor-post__excerpt',des:'Post Excerpt p'},
	{sel:'.elementor-widget-posts .elementor-post__read-more',des:'Post Read More'},
	
	{sel:'.elementor-widget-posts .elementor-post__meta-data .elementor-post-date',des:'Post Meta Date'},
	{sel:'.elementor-widget-posts .elementor-post__meta-data .elementor-post-avatar',des:'Post Avatar'},
	{sel:'.elementor-widget-posts .elementor-post__avatar',des:'Post Avatar'},
	{sel:'.elementor-widget-posts .elementor-post__avatar img',des:'Post Avatar Img'},
	{sel:'.elementor-widget-posts .elementor-post__card',des:'Post Card'},
	
	{sel:'.elementor-widget-posts .elementor-post__badge',des:'Post Badge'},
	{sel:'.elementor-widget-posts .elementor-post__thumbnail__link',des:'Post Thumbnail Link'},
	// POSTS 2
	
	
	{sel:'.elementor-posts-container ',des:'Posts Area'},
	{sel:'.elementor-posts-container .elementor-post',des:'Post'},
	{sel:'.elementor-posts-container .elementor-post__thumbnail img',des:'Post Img'},
	{sel:'.elementor-posts-container .elementor-post__text',des:'Posts Text Area'},
	{sel:'.elementor-posts-container .elementor-post__title a',des:'Post Title Link'},
	{sel:'.elementor-posts-container .elementor-post__meta-data',des:'Post Meta Area'},
	{sel:'.elementor-posts-container .elementor-post__meta-data span',des:'Post Meta Item'},
	{sel:'.elementor-posts-container .elementor-post__excerpt',des:'Post Excerpt'},
	{sel:'.elementor-posts-container .elementor-post__excerpt p',des:'Post Excerpt Paragraph'},
	{sel:'.elementor-posts-container .elementor-post__read-more',des:'Post Read More'},
	
	{sel:'.elementor-posts-container .elementor-post__meta-data .elementor-post-date',des:'Post Meta Date'},
	{sel:'.elementor-posts-container .elementor-post__meta-data .elementor-post-avatar',des:'Post Avatar'},
	{sel:'.elementor-posts-container .elementor-post__avatar',des:'Post Avatar'},
	{sel:'.elementor-posts-container .elementor-post__avatar img',des:'Post Avatar Img'},
	{sel:'.elementor-posts-container .elementor-post__card',des:'Post Card'},
	
	{sel:'.elementor-posts-container .elementor-post__badge',des:'Post Badge'},
	{sel:'.elementor-posts-container .elementor-post__thumbnail__link',des:'Post Thumbnail Link'},


	
	
	// PORTFOLIO
	{sel:'.elementor-portfolio',des:'Portfolio Area'},
	{sel:'.elementor-portfolio .elementor-portfolio-item',des:'Portfolio Item'},
	{sel:'.elementor-portfolio .elementor-portfolio-item .elementor-portfolio-item__overlay',des:'Portfolio Overlay'},
	{sel:'.elementor-portfolio .elementor-portfolio-item .elementor-portfolio-item__title',des:'Portfolio Overlay Title'},
	
	// SLIDES
	{sel:'.elementor-widget-slides',des:'Slides'},
	{sel:'.elementor-widget-slides .slick-arrow',des:'Slides Arrows'},
	{sel:'.elementor-widget-slides .elementor-slide-content',des:'Slide Content'},
	{sel:'.elementor-widget-slides .elementor-slide-content .elementor-slide-heading',des:'Slide Heading'},
	{sel:'.elementor-widget-slides .elementor-slide-content .elementor-slide-description',des:'Slide Content'},
	{sel:'.elementor-widget-slides .elementor-slide-content .elementor-slide-button',des:'Slide Button'},
	{sel:'.elementor-widget-slides .slick-dots',des:'Slides Nav'},
	{sel:'.elementor-widget-slides .slick-dots li',des:'Slides Nav Item'},
	{sel:'.elementor-widget-slides.slick-dots li button',des:'Slides Nav Dot'},
	
	// FORMS

	{sel:'.elementor-form',des:'Form Area'},
	{sel:'.elementor-form .elementor-field-group',des:'Form Group'},
	{sel:'.elementor-form label',des:'Form Label'},
	{sel:'.elementor-form input',des:'Form Input Field'},
	{sel:'.elementor-form textarea',des:'Form Textarea'},
	{sel:'.elementor-form button[type=submit]',des:'Form Button'},
	
	// VERTICAL NAV
	{sel:'.elementor-widget-nav-menu',des:'Nav Area'},
	{sel:'.elementor-widget-nav-menu .elementor-menu-toggle',des:'Nav Toggle'},
	{sel:'.elementor-widget-nav-menu .elementor-menu-toggle i',des:'Nav Toggle Icon'},
	{sel:'.elementor-widget-nav-menu .elementor-nav-menu',des:'Nav Menu Wrapper'},
	{sel:'.elementor-widget-nav-menu .elementor-nav-menu li a',des:'Nav Menu Item'},
	
	
	// HEADLINE
	{sel:'.elementor-headline',des:'Headline Area'},
	{sel:'.elementor-headline .elementor-headline-plain-text',des:'Headline Plain Text'},
	{sel:'.elementor-headline .elementor-headline-dynamic-text',des:'Headline Dynamic Text'},
	
	// PRICE LIST
	{sel:'.elementor-widget-price-list',des:'Prices Area'},
	{sel:'.elementor-widget-price-list ul.elementor-price-list',des:'Prices List'},
	{sel:'.elementor-widget-price-list ul.elementor-price-list li',des:'Prices List Item'},
	{sel:'.elementor-widget-price-list li .elementor-price-list-header',des:'Prices Header'},
	{sel:'.elementor-widget-price-list li .elementor-price-list-title',des:'Prices Title'},
	{sel:'.elementor-widget-price-list li .elementor-price-list-separator',des:'Prices Separator'},
	{sel:'.elementor-widget-price-list li .elementor-price-list-price',des:'Prices Price'},
	{sel:'.elementor-widget-price-list li .elementor-price-list-description',des:'Prices Description'},
	{sel:'.elementor-widget-price-list li .elementor-price-list-description a',des:'Prices Description Link'},
	
	
	// PRICING TABLES
	
	{sel:'.elementor-widget-price-table',des:'Pricing Area'},
	{sel:'.elementor-widget-price-table .elementor-widget-container',des:'Pricing Container'},
	{sel:'.elementor-widget-price-table .elementor-price-table__header',des:'Pricing Header'},
	{sel:'.elementor-widget-price-table .elementor-price-table__header .elementor-price-table__heading',des:'Pricing Heading'},
	{sel:'.elementor-widget-price-table .elementor-price-table__header.elementor-price-table__subheading',des:'Pricing Description'},
	{sel:'.elementor-widget-price-table .elementor-price-table__ribbon-inner',des:'Pricing Ribbon'},
	{sel:'.elementor-widget-price-table .elementor-price-table__price',des:'Pricing Price'},
	{sel:'.elementor-widget-price-table .elementor-price-table__price .elementor-price-table__original-price',des:'Pricing Original'},
	{sel:'.elementor-widget-price-table .elementor-price-table__price .elementor-price-table__currency',des:'Pricing Currency'},
	{sel:'.elementor-widget-price-table .elementor-price-table__price .elementor-price-table__integer-part',des:'Pricing Integer'},
	{sel:'.elementor-widget-price-table .elementor-price-table__price .elementor-price-table__fractional-part',des:'Pricing Fractional'},
	{sel:'.elementor-widget-price-table .elementor-price-table__price .elementor-price-table__period',des:'Pricing Period'},
	{sel:'.elementor-widget-price-table .elementor-price-table__features-list',des:'Pricing Features'},
	{sel:'.elementor-widget-price-table .elementor-price-table__features-list li',des:'Pricing Feature'},
	{sel:'.elementor-widget-price-table .elementor-price-table__features-list li i',des:'Pricing Feature Icon'},
	{sel:'.elementor-widget-price-table .elementor-price-table__button',des:'Pricing Button'},
	{sel:'.elementor-widget-price-table .elementor-price-table__additional_info',des:'Pricing Info'},
	{sel:'.elementor-widget-price-table .elementor-price-table__additional_info p',des:'Pricing Info Paragraph'},
	{sel:'.elementor-widget-price-table .elementor-price-table__additional_info a',des:'Pricing Info Link'},
	
	// FLIP BOX
	{sel:'.elementor-flip-box .elementor-flip-box__front',des:'Flip Front Layer'},
	{sel:'.elementor-flip-box .elementor-flip-box__front .elementor-flip-box__layer__title',des:'Flip Front Title'},
	{sel:'.elementor-flip-box .elementor-flip-box__front .elementor-icon-wrapper',des:'Flip Front Icon Wrapper'},
	{sel:'.elementor-flip-box .elementor-flip-box__front .elementor-icon-wrapper i',des:'Flip Front Icon'},
	{sel:'.elementor-flip-box .elementor-flip-box__front .elementor-flip-box__layer__description',des:'Flip Front Description'},
	{sel:'.elementor-flip-box .elementor-flip-box__front .elementor-flip-box__layer__description p',des:'Flip Front Description Paragraph'},
	{sel:'.elementor-flip-box .elementor-flip-box__front .elementor-flip-box__layer__description a',des:'Flip Front Description Link'},
	{sel:'.elementor-flip-box .elementor-flip-box__front .elementor-flip-box__button',des:'Flip Front Button'},
	
	{sel:'.elementor-flip-box .elementor-flip-box__back',des:'Flip back Layer'},
	{sel:'.elementor-flip-box .elementor-flip-box__back .elementor-flip-box__layer__title',des:'Flip back Title'},
	{sel:'.elementor-flip-box .elementor-flip-box__back .elementor-icon-wrapper',des:'Flip back Icon Wrapper'},
	{sel:'.elementor-flip-box .elementor-flip-box__back .elementor-icon-wrapper i',des:'Flip back Icon'},
	{sel:'.elementor-flip-box .elementor-flip-box__back .elementor-flip-box__layer__description',des:'Flip back Description'},
	{sel:'.elementor-flip-box .elementor-flip-box__back .elementor-flip-box__layer__description p',des:'Flip back Description Paragraph'},
	{sel:'.elementor-flip-box .elementor-flip-box__back .elementor-flip-box__layer__description a',des:'Flip back Description Link'},
	{sel:'.elementor-flip-box .elementor-flip-box__back .elementor-flip-box__button',des:'Flip back Button'},
	
	
	// CTA
	
	{sel:'.elementor-widget-call-to-action',des:'CTA Area'},
	{sel:'.elementor-widget-call-to-action .elementor-cta__bg-overlay',des:'CTA Overlay'},
	{sel:'.elementor-widget-call-to-action .elementor-cta__content',des:'CTA Content'},
	{sel:'.elementor-widget-call-to-action .elementor-cta__content .elementor-cta__title',des:'CTA Title'},
	{sel:'.elementor-widget-call-to-action .elementor-cta__content .elementor-cta__description',des:'CTA Description'},
	{sel:'.elementor-widget-call-to-action .elementor-cta__content .elementor-cta__description p',des:'CTA Description Paragraph'},
	{sel:'.elementor-widget-call-to-action .elementor-cta__content .elementor-cta__description a',des:'CTA Description Link'},
	{sel:'.elementor-widget-call-to-action .elementor-cta__button',des:'CTA Button'},
	
	// TESTIMONIAL CAROUSEL
	{sel:'.elementor-widget-testimonial-carousel .elementor-testimonial',des:'Testimonial Area'},
	{sel:'.elementor-widget-testimonial-carousel .elementor-testimonial__text',des:'Testimonial Text'},
	{sel:'.elementor-widget-testimonial-carousel .elementor-testimonial__footer',des:'Testimonial Footer'},
	{sel:'.elementor-widget-testimonial-carousel .elementor-testimonial__footer .elementor-testimonial__image img',des:'Testimonial Image'},
	{sel:'.elementor-widget-testimonial-carousel .elementor-testimonial__footer .elementor-testimonial__cite',des:'Testimonial Author Area'},
	{sel:'.elementor-widget-testimonial-carousel .elementor-testimonial__footer .elementor-testimonial__name',des:'Testimonial Name'},
	{sel:'.elementor-widget-testimonial-carousel .elementor-testimonial__footer .elementor-testimonial__title',des:'Testimonial Title'},
	{sel:'.elementor-widget-testimonial-carousel .swiper-pagination',des:'Testimonial Pagination Area'},
	{sel:'.elementor-widget-testimonial-carousel .swiper-pagination .swiper-pagination-bullet',des:'Testimonial Pagination Bullet'},
	{sel:'.elementor-widget-testimonial-carousel .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active',des:'Testimonial Pagination Active Bullet'},
	
	// COUNTDOWN
	{sel:'.elementor-widget-countdown',des:'Countdown Area'},
	{sel:'.elementor-widget-countdown .elementor-countdown-item',des:'Countdown Item'},
	{sel:'.elementor-widget-countdown .elementor-countdown-item .elementor-countdown-digits',des:'Countdown Digit'},
	{sel:'.elementor-widget-countdown .elementor-countdown-item .elementor-countdown-label',des:'Countdown Label'},
	
	// BLOCKQUOTE
	{sel:'.elementor-widget-blockquote',des:'Blockquote Area'},
	{sel:'.elementor-widget-blockquote .elementor-blockquote',des:'Blockquote Quote'},
	{sel:'.elementor-widget-blockquote .elementor-blockquote p',des:'Blockquote Quote Paragraph'},
	{sel:'.elementor-widget-blockquote .elementor-blockquote a',des:'Blockquote Quote Link'},
	{sel:'.elementor-widget-blockquote footer',des:'Blockquote Footer'},
	{sel:'.elementor-widget-blockquote .elementor-blockquote__author',des:'Blockquote Author'},
	{sel:'.elementor-widget-blockquote .elementor-blockquote__tweet-button',des:'Blockquote Tweet Button'},
	
	// ORBIT FOX PRICING
	{sel:'.elementor-widget-obfx-pricing-table',des:'Pricing Area'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-pricing-table-wrapper',des:'Pricing Table'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-title-wrapper',des:'Pricing Title Area'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-title-wrapper .obfx-pricing-table-title',des:'Pricing Table Title'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-title-wrapper .obfx-pricing-table-subtitle',des:'Pricing Table Subtitle'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-price-wrapper',des:'Price Wrapper'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-price-wrapper .obfx-price-currency',des:'Price Currency'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-price-wrapper .obfx-price',des:'Table Price'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-price-wrapper .obfx-pricing-period',des:'Pricing Period'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-feature-list',des:'Pricing Feature List'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-feature-list li',des:'Pricing Feature'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-feature-list li i',des:'Pricing Feature Icon'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-feature-list li a',des:'Pricing Feature Link'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-feature-list li .obfx-pricing-table-accented',des:'Pricing Feature Accent'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-feature-list li .obfx-pricing-table-feature',des:'Pricing Feature Text'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-pricing-table-button-wrapper',des:'Pricing Button Area'},
	{sel:'.elementor-widget-obfx-pricing-table .obfx-pricing-table-button-wrapper .obfx-pricing-table-button',des:'Pricing Button'},
	
	// ORBIT FOX SERVICES
	{sel:'.elementor-widget-obfx-services',des:'Services Area'},
	{sel:'.elementor-widget-obfx-services .obfx-grid-wrapper',des:'Services Item'},
	{sel:'.elementor-widget-obfx-services .obfx-icon-wrap i',des:'Services Icon'},
	{sel:'.elementor-widget-obfx-services .obfx-service-box-content',des:'Services Content'},
	{sel:'.elementor-widget-obfx-services .obfx-service-box-content .obfx-service-title',des:'Services Title'},
	{sel:'.elementor-widget-obfx-services .obfx-service-box-content .obfx-service-text',des:'Services Text'},
	{sel:'.elementor-widget-obfx-services .obfx-service-box-content .obfx-service-text p',des:'Services Paragraph'},
	{sel:'.elementor-widget-obfx-services .obfx-service-box-content .obfx-service-text a',des:'Services Link'},
	
	// ORBIT FOX POST GRID
	{sel:'.elementor-widget-obfx-posts-grid',des:'Posts Grid Area'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-wrapper',des:'Posts Grid Item'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-col-image',des:'Posts Grid Image Area'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-col-image img',des:'Posts Grid Image'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-col-content',des:'Posts Grid Content'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-col-content h2',des:'Posts Grid Title Area'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-col-content h2 a',des:'Posts Grid Title Link'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-meta',des:'Posts Grid Meta Area'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-meta span',des:'Posts Grid Meta Item'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-meta span i',des:'Posts Grid Meta Icon'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-content',des:'Posts Grid Content'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-content p',des:'Posts Grid Content Paragraph'}, 
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-footer',des:'Posts Grid Footer'},
	{sel:'.elementor-widget-obfx-posts-grid .obfx-grid-footer a',des:'Posts Grid Footer Link'},
	
	// ORBIT FOX FORM
	{sel:'.content-form',des:'Form Area'},
	{sel:'.content-form fieldset',des:'Form Fieldset'},
	{sel:'.content-form label',des:'Form Label'},
	{sel:'.content-form input',des:'Form Input'},
	{sel:'.content-form textarea',des:'Form Textarea'},
	{sel:'.content-form button',des:'Form Button'},
	
	//WP MENU
	{sel:'.elementor-nav-menu__container',des:'Menu Container'},
	{sel:'.menu',des:'WP Menu Container'},
	{sel:'.menu li',des:'WP Menu Item'},
	{sel:'.menu li a',des:'WP Menu Link'},
	
	// FILTERS
	{sel:'.elementor-portfolio__filters',des:'Filter Area'},
	{sel:'.elementor-portfolio__filters li',des:'Filter Item'},
	{sel:'.elementor-portfolio__filters li.active',des:'Filter Active Item'},
	
	
	// RATINGS
	{sel:'.elementor-star-rating__wrapper',des:'Rating Area'},
	{sel:'.elementor-star-rating__title',des:'Rating Title'},
	{sel:'.elementor-star-rating',des:'Rating Stars Area'},
	{sel:'.elementor-star-rating i',des:'Rating Star'},
	
	
	// SEARCH FORM
	{sel:'.elementor-search-form__container',des:'Search Area'},
	{sel:'.elementor-search-form__container .elementor-search-form__input',des:'Search Input'},
	{sel:'.elementor-search-form__container .elementor-search-form__submit',des:'Search Submit'},
	
	
	// AUTHOR BOX
	
	{sel:'.elementor-author-box',des:'Author Box'},
	{sel:'.elementor-author-box .elementor-author-box__avatar',des:'Author Box Avatar'},
	{sel:'.elementor-author-box .elementor-author-box__avatar img',des:'Author Box Avatar Img'},
	{sel:'.elementor-author-box .elementor-author-box__text',des:'Author Box Text Area'},
	{sel:'.elementor-author-box .elementor-author-box__name',des:'Author Box Name'},
	{sel:'.elementor-author-box .elementor-author-box__bio',des:'Author Box Bio Area'},
	{sel:'.elementor-author-box.elementor-author-box__bio a',des:'Author Box Bio Link'},
	
	// POST NAV
	{sel:'.elementor-post-navigation',des:'Post Nav'},
	{sel:'.elementor-post-navigation .elementor-post-navigation__link a',des:'Post Nav Link'},
	{sel:'.elementor-post-navigation span.post-navigation__prev--title,span.post-navigation__next--title',des:'Post Nav Title'},
	{sel:'.elementor-post-navigation span.post-navigation__prev--label,span.post-navigation__next--label',des:'Post Nav Label'},
];


	
	var section_selectors = {}
	var col_selectors = {}
	var ele = $('.elementor',frame)
	ele.addClass('no-rocket')
	ele.each(function(){
		var t = $(this);
		var e_id = '';
		
		var cla = t.attr('class').split(' ')
		for (var c in cla){
			if (cla[c].indexOf('elementor-')>-1){
				e_id += cla[c]
			}
		}
	
		var sections = t.find('.elementor-section-wrap > .elementor-element[data-id]');
		var base = '.elementor';
		
		sections.each(function(){
			var classes = $(this).attr('class').split(' ');
			var custom_id = $(this).attr('id');
			
			if (custom_id){
				var id = '#'+custom_id;
			} else {
				var custom_classes = [];
				for (var c in classes){
					var cc = classes[c];
					if (cc != 'editable' && cc.indexOf('elementor') == -1 && cc.indexOf('has_')){
						if (cc != 'clearfix') custom_classes.push(cc)
					}
				}
				if (custom_classes.length > 0){
					var id = '.'+custom_classes.join('.')
				} else {
					var id = $(this).attr('data-id');
					var id = '.elementor-element-'+id;
				}
			}
			section_selectors['Elementor Section '+id] = {sel:base+' .elementor-section-wrap .elementor-element'+id}
			
			//var col_base = base+' '+id;
			
			var cols = t.find('.elementor-column')
			cols.each(function(){
				var classes = $(this).attr('class').split(' ');
				var custom_id = $(this).attr('id');
				
				let id = false;
				
				if (custom_id){
					id = '#'+custom_id;
				} else {
					var custom_classes = [];
					for (var c in classes){
						var cc = classes[c];
						if (cc != 'editable' && cc.indexOf('elementor') == -1 && cc.indexOf('has_')){
							if (cc != 'clearfix' && cc.indexOf('csshero') == -1) custom_classes.push(cc)
						}
					}
					if (custom_classes.length > 0){
						id = '.'+custom_classes.join('.')	
					}
				}
			
				if (id) col_selectors['Elementor Col '+id] = {sel:base+' '+id}
			})
			
			
		})
	
	})
	
	for (var n in section_selectors){
		var ss = section_selectors[n].sel
		csshero_declare_item(ss,n)
		
		
		for (var g in generic_inner_stuff){
			csshero_declare_item(ss+' '+generic_inner_stuff[g].sel,n+' '+generic_inner_stuff[g].des);
		}
		csshero_config_post(ss,'.elementor-text-editor',n+' Text Editor')
		
	}
	
	for (var n in col_selectors){
		var ss = col_selectors[n].sel
		csshero_declare_item(ss,n)
		for (var g in generic_inner_stuff){
			csshero_declare_item(ss+' '+generic_inner_stuff[g].sel,n+' '+generic_inner_stuff[g].des);
		}
		csshero_config_post(ss,'.elementor-text-editor',n+' Text Editor')
				
	}
	console.log('ELEMENTOR CONFIG LOADED')
	
	window.csshero_plugin_is_configurated = true;///// VISUAL COMPOSER V 0.9.1<script>
frame = window.frames['csshero-iframe-main-page'].document.body;

// THE7 COMPATIBILITY ISSUE
is_the7 = jQuery('#cssherohtml').attr('data-child-theme-slug');
if (is_the7 == 'the7'){
	declare_rocket_mode('#main','vc_row , vc_col, vc_row-,wpb_column'); //!!!!!	
} else {

function csshero_vc_get_extra_classes(i){
	var clArray = [];
	classList = i.attr('class').split(/\s+/);
	
	
	jQuery.each( classList, function(index, item){
		if ((item.toLowerCase().indexOf("vc") < 0) && (item.toLowerCase().indexOf("wpex") < 0) && (item.toLowerCase().indexOf("wpb") < 0) && (item.toLowerCase().indexOf("content") < 0) && (item.toLowerCase().indexOf("vcex") < 0) && (item.toLowerCase().indexOf("reset-") < 0) && (item.toLowerCase().indexOf("animate-") < 0) && (item.toLowerCase().indexOf("remove-") < 0) && (item.toLowerCase().indexOf("theme-") < 0) && (item.toLowerCase().indexOf("editable") < 0) && (item.toLowerCase().indexOf("ui-") < 0) && (item.toLowerCase().indexOf("inherit") < 0) && (item.toLowerCase().indexOf("skin") < 0) && (item.toLowerCase().indexOf("owl") < 0) && (item.toLowerCase().indexOf("clearfix") < 0) && (item.toLowerCase().indexOf("align") < 0) && (item.toLowerCase().indexOf("-columns") < 0) && (item != 'clr') && (item != 'default') && (item != ' ') && (item != '') && (item.toLowerCase().indexOf("count_") < 0)){
				clArray.push(item);
			}
		});
		
		CC = clArray.join('.');
		if (CC){
			CC = '.'+CC;
		} else { CC = ''; }
		return CC;
}
function vc_config_el(what,ewhat,whatdesc){
	rArray = [];
	jQuery(what,frame).each(function(){
		var t = jQuery(this);
		var parent = t.closest('.hentry');
		
		
		
		// GENESIS COMPATIBILITY
		if (parent.length < 1){
			parent = t.closest('.entry');
		}
		
		var id = '';
		if (parent.hasClass('type-page')){
			id = parent.attr('id');
			id = '#'+id;
		}
		
		
		
		
		ind = jQuery(this).index()+1; // SECTION INDEX IF NO ID IS PROVIDED
		
		
		rowscope = '';
		rowdesc = '';
		rScope = '';
		
		customCC = csshero_vc_get_extra_classes(jQuery(this));
		
		

		
		
		rDepth = customCC.split('.');
		rDepth = rDepth.length;
		
		
		// GENESIS COMPATIBILITY
		
		if (id == '#undefined') id = '';
		
		if (parent.hasClass('entry')){
			rScope = id+'.entry '+what+customCC;
		}
		
		if (parent.hasClass('hentry')) {
			rScope = id+'.hentry '+what+customCC;
		}	
		
		rArray.push({
			scope:rScope,
			depth:rDepth,
			customClasses:customCC
		});

		rArray.sort(function(a,b){
			if(a.scope > b.scope){ return 1}
			if(a.scope < b.scope){ return -1}
			return 0;
		});
		
	});
	csshero_declare_item(customCC+' h1.wpb_heading',customCC+' H1 Heading');
	csshero_declare_item(customCC+' h2.wpb_heading',customCC+' H2 Heading');
	csshero_declare_item(customCC+' h3.wpb_heading',customCC+' H3 Heading');
	csshero_declare_item(customCC+' h4.wpb_heading',customCC+' H4 Heading');
	csshero_declare_item(customCC+' h5.wpb_heading',customCC+' H5 Heading');
	
	// HACK PER PERMETTERE L'EDITING CON DIRECTORYENGINE, BRUTTO.
	if (customCC != ''){
		csshero_declare_item(customCC+' .widgettitle',customCC+' Widget Title');
	}
	jQuery.each(rArray, function(i,el){
		jQuery.each(ewhat,function(escope,dscope){
			csshero_declare_item(el.scope+' '+escope,el.customClasses.replace('.',' ')+' '+dscope);
		});
		
		csshero_declare_item(el.scope,whatdesc+' '+el.customClasses.replace('.',' '));
	})
}


// WAS // var VC_rows = jQuery('.wpb_row',frame).size();
var VC_rows = jQuery('.wpb_row',frame).length;

if (VC_rows > 0){
//// SPARA TUTTO!




		vc_config_el('.wpb_row','','Row');
		
		icoA = {
			'.vc_icon_element-inner':'Icon Outer Area',
			'.vc_icon_element-inner span':'Icon Element',
		}
		
		vc_config_el('.vc_icon_element',icoA,'Icon Area');
		
		var sepA = {
			'.vc_sep_holder + h4':'Separator Text',
			'.vc_sep_line':'Separator Line'
		};
		vc_config_el('.vc_separator',sepA,'Separator');

		var texA = {
			'p':'Paragraph',
			'a':'Link',
			'img':'Image',
			'strong':'Bold',
			'h1':'H1 Heading',
			'h2':'H2 Heading',
			'h3':'H3 Heading',
			'h4':'H4 Heading',
			'h5':'H5 Heading',
			'h6':'H6 Heading'
		}
		vc_config_el('.wpb_text_column',texA,'Text Block');

		var imgA = {'img':'Image'}
		vc_config_el('.wpb_single_image',imgA,'Single Img');
		
		
		var aleA = {
			'.messagebox_text':'Alert Area',
			'p':'Alert Paragraph'
		}
		vc_config_el('.wpb_alert-info',aleA,'Alert Info');
		vc_config_el('.wpb_alert-warning',aleA,'Alert Warning');
		vc_config_el('.wpb_alert-success',aleA,'Alert Success');
		vc_config_el('.wpb_alert-danger',aleA,'Alert Danger');
		
		
		vc_config_el('.wpb_toggle','','Toggle');
		vc_config_el('.wpb_toggle_content',texA,'Toggle Content');		
		
		var galA = {
			//'h2.wpb_heading':'Gallery Heading',
			'.flexslider':'Flexslider',
			'.flex-direction-nav a':'Gallery Nav Link',
			'.flex-control-paging li a':'Gallery Paging Link',
			'.flex-control-paging li a.flex-active':'Gallery Paging Active',
			'.nivoSlider':'Nivoslider',
			'.nivo-control.active':'Nivo Active Item',
			'.nivo-control':'Nivo Controls',
			'.wpb_image_grid_ul':'Gallery Grid',
			'.wpb_image_grid_ul li':'Gallery Grid Item'
		};
		vc_config_el('.wpb_gallery',galA,'Gallery');
			
		// MANCA ANCORA IMAGE CAROUSEL	
		var tabA = {
			'.wpb_tabs_heading':'Tabs Heading',
			'.wpb_tabs_nav':'Tabs Nav',
			'.wpb_tabs_nav li':'Tab',
			'.wpb_tabs_nav a':'Tab Nav Link',
			'.wpb_tabs_nav li.ui-tabs-active':'Active Tab',
			'.wpb_tabs_nav li.ui-tabs-active a':'Active Tab Link',
			'.wpb_tour_tabs_wrapper .wpb_tab':'Tab Content',
			'.wpb_prev_slide':'Tab Prev Slide Area',
			'.wpb_next_slide':'Tab Next Slide Area',
			'.wpb_prev_slide a':'Tab Prev Slide Link',
			'.wpb_next_slide a':'Tab Next Slide Link'
			//.wpb_content_element.wpb_tabs .wpb_tour_tabs_wrapper .wpb_tab
		};
		vc_config_el('.wpb_tabs',tabA,'Tabs');
		
		vc_config_el('.wpb_tour',tabA,'Tour');

		var accA = {
			'.wpb_accordion_heading':'Accordion Heading',
			'.wpb_accordion_header a':'Accordion Header Title',
			'.wpb_accordion_header span':'Accordion Header Icon', 
			'.wpb_accordion_header.ui-state-active a':'Accordion Active Title',
			'.wpb_accordion_header.ui-state-active span':'Accordion Active Icon',
			'.wpb_accordion_content':'Accordion Content Area'
		};
		vc_config_el('.wpb_accordion',accA,'Accordion');
		
		gridA = {
			'.vc_gitem-zone':'Grid Item',
			'.vc_grid-item img':'Grid Item Image',
			'.vc_grid-item .vc_custom_heading':'Grid Item Heading Area',
			'.vc_grid-item .vc_custom_heading h4':'Grid Item Heading',
			'.vc_grid-item p':'Grid Item Paragraph',
			'.vc_grid-item .vc_btn3-container':'Grid Item Button Area',
			'.vc_grid-item .vc_btn3-container button':'Grid Item Button',
		}
		vc_config_el('.vc_grid',gridA,'Grid Posts');
		
		
		var btnA = {
			'i.icon':'Icon'
		}
		
		vc_config_el('.wpb_button',btnA,'Button');
		vc_config_el('.vc_btn:not(.vc_btn_square):not(.vc_btn_round):not(.vc_btn_outlined):not(.vc_btn_3d):not(.vc_btn_square_outlined)','','Regular Button');
		vc_config_el('.vc_btn.vc_btn_square','','Square Button');
		vc_config_el('.vc_btn.vc_btn_round','','Round Button');
		vc_config_el('.vc_btn.vc_btn_outlined','','Outlined Button');
		vc_config_el('.vc_btn.vc_btn_3d','','3D Button');
		vc_config_el('.vc_btn.vc_btn_square_outlined','','Square Outlined Button');
		
		
		new_btn = {
			'button':'BTN'
		}
		
		vc_config_el('.vc_btn3-container',new_btn,'Button')
		
		
		ctaA = {
			'h2.wpb_call_text':'CTA H2 Heading',
			'.wpb_button':'CTA Button',
			'.wpb_button i.icon':'CTA Button Icon',
			'.vc_btn':'CTA Button',
			'hgroup':'CTA Heading Area',
			'p':'CTA Paragraph'
		};
		vc_config_el('.wpb_call_to_action',ctaA,'CTA Area');
		
		ctaA3 = {
			'.vc_cta3-content-header':'CTA Header',
			'.vc_cta3-content-header h2':'CTA Title',
			'.vc_cta3-content-header h4':'CTA Subtitle',
			'.vc_icon_element-inner':'CTA Icon Area',
			'.vc_icon_element-inner span':'CTA Icon',
			'.vc_btn3-container':'CTA Button Area',
			'.vc_btn3-container button':'CTA Button',
		}
		
		vc_config_el('.vc_cta3',ctaA3,'CTA Area');
		
		vc_config_el('.vc_call_to_action',ctaA,'CTA');
		
		carA = {
			'ol':'Indicators Area',
			'ol li':'Indicator',
			'ol li.vc_active':'Active Indicator',
			'.vc_carousel-control .icon-prev':'Prev Icon',
			'.vc_carousel-control .icon-next':'Next Icon'
			
		}
		
		vc_config_el('.vc_images_carousel',carA,'Carousel');
		
		teaA = {
			'.isotope-inner':'Grid Item',
			'h2.post-title':'Grid Post Title Area',
			'h2.post-title a':'Grid Post Title',
			'.entry-content':'Grid Post Content',
			'.entry-content p':'Grid Content Paragraph',
			'.entry-content a':'Grid Content Link',
			'.entry-content img':'Grid Content Img',
			'.entry-content span':'Grid Content Span',
			'.entry-content quote':'Grid Content Quote',
			'.entry-content blockquote':'Grid Content Blockquote',
			'.entry-content code':'Grid Content Code',
			'.entry-content table':'Grid Content Table',
			'.entry-content table tr':'Grid Content Table Row',
			'.entry-content table td':'Grid Content Table Cell',
			'.entry-content table th':'Grid Content Table Heading',
			'.entry-content table h1':'Grid Content Heading 1',
			'.entry-content table h2':'Grid Content Heading 2',
			'.entry-content table h3':'Grid Content Heading 3',
			'.entry-content table h4':'Grid Content Heading 4',
			'.entry-content table h5':'Grid Content Heading 5',
			'.entry-content table h6':'Grid Content Heading6',
		}
		
		vc_config_el('.wpb_teaser_grid',teaA,'Post Grid');
		
		// MANCANO I CAROUSEL NON SO NON FUNZIONANO 
		
		pslA = {
			'.wpb_posts_slider_heading':'Slider Heading',
			'.flex-caption':'Caption',
			'h2.post-title':'Post Title Area',
			'h2.post-title a':'Post Title'
		}
		
		vc_config_el('.wpb_posts_slider',pslA,'Post Slider');
		
		widA = {
			'h2.wpb_widgetised_column_heading':'Heading',
			'aside':'Widget',
			'aside h3.widget-title':'Widget Title',
			'aside li':'Widget List Item',
			'aside ul':'Widget List',
			'aside ul li a':'Widget List Link',
			'aside p':'Widget Paragraph',
			
			'.sidebar-box':'Widget',
			'.sidebar-box h3.widget-title':'Widget Title',
			'.sidebar-box li':'Widget List Item',
			'.sidebar-box ul':'Widget List',
			'.sidebar-box ul li a':'Widget List Link',
			'.sidebar-box p':'Widget Paragraph'
			
		}
		
		vc_config_el('.wpb_widgetised_column',widA,'Widgets Area');
		
		
		prbA = {
			'.vc_single_bar':'Single Bar Area',
			'.vc_single_bar small.vc_label':'Single Bar',
			'.vc_single_bar .vc_bar':'Inner Bar',
		}
		
		vc_config_el('.vc_progress_bar',prbA,'Progress Bars Area');
		
		pieA = {
			'.vc_pie_wrapper':'Pie Wrapper',
			'.vc_pie_chart_value':'Pie Value',
			'.vc_pie_chart_back':'Pie Border (use Border Property)'
		}
		
		vc_config_el('.vc_pie_chart',pieA,'Pie Chart');
		
		cuhA = {
			'h2':'H2 Heading'
		}
		
		vc_config_el('.vc_custom_heading',cuhA,'Custom Heading');
		
						
		seaA = {
			'.input-group':'Search Area',
			'.input-group #s':'Search Area',
			'.input-group #searchsubmit':'Search Area',
		}
		
		vc_config_el('.vc_wp_search',seaA,'Search');
		
		metA = {
			'.widget':'Widget Area',
			'.widget ul':'Widget List',
			'.widget ul li':'Widget List Item',
			'.widget ul li a':'Widget Link',
			'.widget ul li .comment-author-link':'Comment Author Link',
			'.widget ul li .post-date':'Post Date',
		}
		vc_config_el('.vc_wp_meta',metA,'Meta Area');
		vc_config_el('.vc_wp_recentcomments',metA,'Recent Comments');
		vc_config_el('.vc_wp_pages',metA,'Pages');
		vc_config_el('.vc_wp_posts',metA,'Recent Posts');
		vc_config_el('.vc_wp_links',metA,'Links');
		vc_config_el('.vc_wp_categories',metA,'Categories');
		vc_config_el('.vc_wp_archives',metA,'Archives');
		
		cldA = {
			'#wp-calendar':'Calendar',
			'#wp-calendar caption':'Month',
			'#wp-calendar thead th':'Calendar Head Cell',
			'#wp-calendar tbody>tr:nth-child(odd)':'Calendar Row Odd',
			'#wp-calendar tbody>tr:nth-child(even)':'Calendar Row Even',
			'#wp-calendar tbody>tr:nth-child(even) a':'Calendar Row Even Link',
			'#wp-calendar tbody>tr:nth-child(odd) a':'Calendar Row Odd Link',
			'#wp-calendar tfoot':'Calendar Footer',
			'#wp-calendar tfoot a':'Calendar Footer Link',

		}
		vc_config_el('.vc_wp_calendar',cldA,'Calendar Area');
		
		tgcA = {
			'.tagcloud':'Tag Cloud Area',
			'.tagcloud a':'Tag'
		}				
		
		vc_config_el('.widget_tag_cloud',tgcA,'Tag Cloud Area');							
		
		menA = {
			'ul.menu':'Container',
			'ul.menu li':'Menu List Item',
			'ul.menu li a':'Menu Link',
			'ul.menu li ul.sub-menu':'Submenu Area',
			'ul.menu li ul.sub-menu li':'Submenu List Item',
			'ul.menu li ul.sub-menu li a':'Submenu Link'
		}
		
		vc_config_el('.vc_wp_custommenu',menA,'Menu');				
		
		
		txwA = {
			'.textwidget':'Text Widget Area',
			'.textwidget p':'Text Widget Paragraph',
			'.textwidget span':'Text Widget Span',
			'.textwidget img':'Text Widget Image',
			'.textwidget h1':'Text Widget H1 Heading',
			'.textwidget h2':'Text Widget H2 Heading',
			'.textwidget h3':'Text Widget H3 Heading',
			'.textwidget h4':'Text Widget H4 Heading',
			'.textwidget h5':'Text Widget H5 Heading',
			'.textwidget h6':'Text Widget H6 Heading',
			'.textwidget strong':'Text Widget Bold Text',
		}
						
		vc_config_el('.vc_wp_text',txwA,'Text Widget');								
										
		
		
		rssA = {
			'.media-list':'RSS List',
			'.media-list li':'RSS Item',
			'.media-list li .rsswidget':'RSS Title',
			'.media-list li .rss-date':'RSS Date',
			'.media-list li .rssSummary':'RSS Summary',
			'.media-list li cite':'RSS Author',
			'.rsswidget img':'RSS Icon',
		}
		
		vc_config_el('.vc_wp_rss',rssA,'RSS Widget');
		
		gmpA = {
			'.wpb_wrapper':'Map Wrapper'
		}
		
		vc_config_el('.wpb_gmaps_widget',gmpA,'Map');
		
		togA = {
			'.vc_toggle_title':'Toggle Title Area',
			'.vc_toggle_title h4':'Toggle Title',
			'.vc_toggle_content':'Toggle Content',
		}
		
		vc_config_el('.vc_toggle',togA,'Toggle Area');
		
		tabA = {
			'.vc_tta-tab:not(.vc_active) a':'Tab',
			'.vc_tta-tab.vc_active a':'Active Tab',
			'.vc_tta-panels':'Tabs Content',
			'.vc_pagination':'Pagination',
			'.vc_pagination .vc_pagination-item':'Pagination Item',
			'.vc_pagination .vc_pagination-item.vc_active':'Pagination Active Item'
		}
		
		vc_config_el('.vc_tta-tabs',tabA,'Tabs Area');
		
		panA = {
			'.vc_tta-panel-heading':'Accordion Heading',
			'.vc_tta-panel-heading h4':'Accordion Heading H4',
			'.vc_active .vc_tta-panel-heading':'Active Accordion Heading',
			'.vc_active .vc_tta-panel-heading h4':'Active Accordion Heading H4',
			'.vc_tta-panel-body':'Accordion Content',
		}
		
		vc_config_el('.vc_tta-panels',panA,'Accordion Area');
		
		// WP EXPLORER CUSTOM ELEMENTS
		
		vc_config_el('.vcex-heading','','Heading');
		vc_config_el('.vcex-button','','Button');
		
		exIconA = {
			'.vcex-icon-box-icon':'Icon Area',
			'.vcex-icon-box-icon i':'Icon',
			'img':'Image',
			'.vcex-icon-box-heading':'Heading',
			'.vcex-icon-box-content':'Content',
			'.vcex-icon-box-content p':'Content Paragraph',
			'.vcex-icon-box-content a':'Content Links',
			'.vcex-icon-box-content h1':'Content H1',
			'.vcex-icon-box-content h2':'Content H2',
			'.vcex-icon-box-content h3':'Content H3',
			
		}
		vc_config_el('.vcex-icon-box',exIconA,'Icon Box Area');
		
		exTeasA = {
			'.vcex-teaser-media':'Media Area',
			'.vcex-teaser-media img':'Media Image',
			'.vcex-teaser-content .vcex-teaser-heading':'Heading',
			'.vcex-teaser-content .vcex-teaser-text':'Content Area',
			'.vcex-teaser-content .vcex-teaser-text p':'Content Paragraph',
			'.vcex-teaser-content .vcex-teaser-text a':'Content Link',
			'.vcex-teaser-content .vcex-teaser-text h1':'Content H1',
			'.vcex-teaser-content .vcex-teaser-text h2':'Content H2',
			'.vcex-teaser-content .vcex-teaser-text h3':'Content H3',
		}
		
		vc_config_el('.vcex-teaser',exTeasA,'Teaser Area');
		
		exFeatA = {
			
			'.vcex-feature-box-media':'Media Area',
			'.vcex-feature-box-media img':'Media Image',
			'.vcex-feature-box-content':'Content',
			'.vcex-feature-box-content .vcex-feature-box-heading':'Heading',
			'.vcex-feature-box-content .vcex-feature-box-text':'Content',
			'.vcex-feature-box-content .vcex-feature-box-text p':'Content Paragraph',
			'.vcex-feature-box-content .vcex-feature-box-text a':'Content Links',
			'.vcex-feature-box-content .vcex-feature-box-text h1':'Content H1',
			'.vcex-feature-box-content .vcex-feature-box-text h2':'Content H2',
			'.vcex-feature-box-content .vcex-feature-box-text h3':'Content H3',
		}
		
		vc_config_el('.vcex-feature-box',exFeatA,'Feature Area');
		
		exListA = {		
			'.vcex-icon-wrap':'Icon Area',
			'.vcex-icon-wrap span':'Icon',
			'span.fa':'Icon',
			'a':'Link',
		}
		vc_config_el('.vcex-list_item',exListA,'List Item');
		
		exBullA = {
			'ul':'List Wrapper',
			'ul li':'List Item'
		}
		
		vc_config_el('.vcex-bullets',exBullA,'Bullet List');
		
		exPriA = {
			'.vcex-pricing-header':'Header',
			'.vcex-pricing-cost':'Cost Area',
			'.vcex-pricing-cost .vcex-pricing-ammount':'Cost Amount',
			'.vcex-pricing-cost .vcex-pricing-per':'Cost Per',
			'.vcex-pricing-content':'Content',
			'.vcex-pricing-content ul':'Content List',
			'.vcex-pricing-content li':'Content List Item',
			'.vcex-pricing-button':'Button Area',
			'.vcex-pricing-button a':'Button',
			'.vcex-pricing-button .left':'Button Icon Left',
			'.vcex-pricing-button .right':'Button Icon Right',
		}
		vc_config_el('.vcex-pricing',exPriA,'Pricing Table');
		vc_config_el('.vcex-pricing.featured',exPriA,'Pricing Table');
		
		
		exSkillA = {
			'.vcex-skillbar-title-inner':'Skillbar Inner Title',
			'.vcex-skillbar-title-inner .vcex-icon-wrap':'Skillbar Icon Area',
			'.vcex-skillbar-bar':'Skillbar Inner',
			'.vcex-skill-bar-percent':'Skillbar Percentage',
		}
		vc_config_el('.vcex-skillbar',exSkillA,'Skill Bar');
		
		vc_config_el('.vcex-icon','','Icon');
		
		exCaptA = {
			'.vcex-milestone-number':'Milestone Number',
			'.vcex-milestone-caption':'Milestone Caption',
		}
		vc_config_el('.vcex-milestone',exCaptA,'Milestone');
		
		exNavA = {
			'a':'Link'
		}
		vc_config_el('.vcex-navbar',exNavA,'Navigation');
		
		exSeaA = {
			'.vcex-searchbar-input':'Input',
			'.vcex-searchbar-button':'Submit',
		}
		
		vc_config_el('.vcex-searchbar',exSeaA,'Search Bar');
		
		exNlA = {
			'input.email':'Email Input',
			'#mc-embedded-subscribe':'Submit Button'
		}
		
		vc_config_el('.vcex-newsletter-form',exNlA,'Newsletter Subscribe');
		
		exNewsA = {
			'.vcex-recent-news-entry':'Entry',
			'.vcex-recent-news-entry .vcex-recent-news-date':'Entry Date Area',
			'.vcex-recent-news-entry .vcex-recent-news-date .day':'Entry Date Day',
			'.vcex-recent-news-entry .vcex-recent-news-date .month':'Entry Date Month',
			'.vcex-recent-news-entry .vcex-news-entry-details':'Entry Details',
			'.vcex-recent-news-entry .vcex-news-entry-thumbnail':'Entry Thumb Area',
			'.vcex-recent-news-entry .vcex-news-entry-thumbnail img':'Entry Thumb',
			'.vcex-recent-news-entry .vcex-recent-news-entry-title':'Entry Title Area',
			'.vcex-recent-news-entry .vcex-recent-news-entry-title h2':'Entry Title',
			'.vcex-recent-news-entry .vcex-recent-news-entry-title h2 a':'Entry Title Link',
			'.vcex-recent-news-entry .vcex-recent-news-entry-excerpt':'Entry Excerpt',
			'.vcex-recent-news-entry .vcex-recent-news-entry-excerpt p':'Entry Excerpt Paragraph',
			'.vcex-recent-news-entry .vcex-recent-news-entry-excerpt a':'Entry Link',
		}
		
		vc_config_el('.vcex-recent-news',exNewsA,'Recent News');
		
		exGridA = {
			'.vcex-blog-entry-inner .vcex-blog-entry-media':'Entry Media Area',
			'.vcex-blog-entry-inner .vcex-blog-entry-media img':'Entry Media Img',
			'.vcex-blog-entry-inner .vcex-blog-entry-details':'Entry Details Area',
			'.vcex-blog-entry-inner .vcex-blog-entry-title':'Entry Title',
			'.vcex-blog-entry-inner .vcex-blog-entry-title a':'Entry Title Link',
			'.vcex-blog-entry-inner .vcex-blog-entry-date':'Entry Date',
			'.vcex-blog-entry-inner .vcex-blog-entry-readmore-wrap':'Entry Read More Area',
			'.vcex-blog-entry-inner .vcex-blog-entry-readmore-wrap a':'Entry Read More Link',
			'.vcex-blog-entry-inner .vcex-blog-entry-excerpt':'Entry Excerpt',
			'.vcex-blog-entry-inner .vcex-blog-entry-excerpt p':'Entry Excerpt Paragraph',
		}
		
		vc_config_el('.vcex-blog-grid-wrap',exGridA,'Grid Posts');
		
		exCarouA = {
			'.wpex-carousel-slide':'Slide',
			'.wpex-carousel-slide .wpex-carousel-entry-media':'Slide Media Area',
			'.wpex-carousel-slide .wpex-carousel-entry-media img':'Slide Media Img',
			'.wpex-carousel-slide .wpex-carousel-entry-details':'Slide Details',
			'.wpex-carousel-slide .wpex-carousel-entry-details a':'Slide Details Link',
			'.wpex-carousel-slide .vcex-blog-entry-date':'Slide Date',
			'.wpex-carousel-slide .wpex-carousel-entry-excerpt':'Slide Excerpt',
			'.wpex-carousel-slide .wpex-carousel-entry-excerpt p':'Slide Excerpt Paragraph',
			'.owl-prev':'Carousel Prev Button',
			'.owl-next':'Carousel Next Button',
		}
		vc_config_el('.wpex-carousel',exCarouA,'Post Carousel');
		
		
		exTestiA = {	
			'.testimonial-entry':'Testimonial',
			'.testimonial-entry .testimonial-entry-content':'Testimonial Content',
			'.testimonial-entry .testimonial-caret':'Testimonial Arrow (use border-top)',
			'.testimonial-entry .testimonial-entry-thumb':'Testimonial Thumb Area',
			'.testimonial-entry .testimonial-entry-thumb img':'Testimonial Thumb',
			'.testimonial-entry .testimonial-entry-meta':'Testimonial Meta Area',
			'.testimonial-entry .testimonial-entry-meta .testimonial-entry-author':'Testimonial Author',
			'.testimonial-entry .testimonial-entry-meta .testimonial-entry-company':'Testimonial Company',
		}
			
		vc_config_el('.vcex-testimonials-grid-wrap',exTestiA,'Tesimonial Grid');
		
		exTestiSliderA = {
			'.vcex-testimonials-fullslider-avatar':'Avatar Area',
			'.vcex-testimonials-fullslider-avatar img':'Avatar Img',
			'.entry p':'Testimonial Text',
			'.vcex-testimonials-fullslider-author':'Testimonial Author',
			'.sp-buttons':'Testimonials Nav Area',
			'.sp-buttons .sp-button':'Testimonials Nav Item',
			'.sp-buttons .sp-button.sp-selected-button':'Testimonials Nav Active Item',
		}
		
		vc_config_el('.vcex-testimonials-fullslider',exTestiSliderA,'Tesimonial Slider');
		
		
		exPortGridA = {
			'.portfolio-entry-details':'Portfolio Item Details',
			'.portfolio-entry-details .portfolio-entry-title':'Portfolio Item Title Area',
			'.portfolio-entry-details .portfolio-entry-title a':'Portfolio Item Title Link',
			'.portfolio-entry-details .portfolio-entry-excerpt':'Portfolio Item Excerpt',
			'.portfolio-entry-details .portfolio-entry-excerpt p':'Portfolio Item Excerpt Paragraph',
			'.portfolio-entry-media':'Portfolio Item Media Area',
			'.portfolio-entry-media img':'Portfolio Item Media Img',
			'.portfolio-entry-readmore-wrap':'Portfolio Item Read More Area',
			'.portfolio-entry-readmore-wrap a':'Portfolio Item Read More',
			'.vcex-portfolio-filter':'Portfolio Filter Area',
			'.vcex-portfolio-filter a':'Porfolio Filter Item',
		}
		
		vc_config_el('.vcex-portfolio-grid-wrap',exPortGridA,'Portfolio Grid');
		
		exStaffA = {
			'.staff-entry-inner':'Staff Item',
			'.staff-entry-inner .staff-entry-media':'Staff Media Area',
			'.staff-entry-inner .staff-entry-media img':'Staff Media Img',
			'.staff-entry-inner .staff-entry-details':'Staff Details Area',
			'.staff-entry-inner .staff-entry-details h2':'Staff Title',
			'.staff-entry-inner .staff-entry-details h2 a':'Staff Title Link',
			'.staff-entry-inner .staff-entry-excerpt':'Staff Excerpt',
			'.staff-entry-inner .staff-entry-excerpt p':'Staff Excerpt Paragraph',
			'.staff-entry-inner .staff-entry-readmore-wrap':'Staff Readmore Area',
			'.staff-entry-inner .staff-entry-readmore-wrap a':'Staff Readmore Button',
		}
		
		vc_config_el('.vcex-staff-grid-wrap',exStaffA,'Staff Grid');
		
		
		
		
		vc_config_el('.wpex-carousel-staff',exCarouA,'Staff Carousel');
		
}


}window.csshero_plugin_is_configurated = true;// <script>  
var frame = window.frames['csshero-iframe-main-page'].document.body;
function mixinSelectors(key, name, extraSelectors) {
		 for (var selectorKey in extraSelectors) {

				var selectorKeyParts = selectorKey.split(",");
				var newselector = "";
				for (var i =0; i < selectorKeyParts.length; i++) {
						if (newselector != '')
								newselector += ",";
						newselector += key + " " + selectorKeyParts[i];
				}

				if (jQuery(newselector,frame).length != 0) {
						csshero_declare_item(newselector, name + " " + extraSelectors[selectorKey]);
				}
		}
}
function csshero_from_json(key, obj, addedRuleCallback) {
		if (typeof obj == 'string') {
		if (jQuery(key,frame).length != 0) {
						csshero_declare_item(key, obj);

						if (addedRuleCallback != undefined) {
								addedRuleCallback.call(this,key,obj);
						}
				}
	} else if (typeof obj == 'object') {
				for (var objkey in obj) {
			csshero_from_json(key + " " + objkey, obj[objkey], addedRuleCallback);
				}
	}
}
function addRevolutionSlider(name, el) {
		var key = "#" + el.id;
	var obj = {};
		obj[key] = {
						"": name + " Wrapper",
						".slotholder": name + " Main Image Wrapper",
						".slotholder .tp-bgimg": name + " Main Image",
						'.tp-caption.medium_grey': name + ' Small Grey Text',
			'.tp-caption.small_text': name + ' Small Text',
			'.tp-caption.medium_text': name + ' Medium Text',
			'.tp-caption.large_text': name + ' Large Text',
			'.tp-caption.very_large_text': name + ' Very Large Text',
			'.tp-caption.very_big_white': name + ' Very Big White',
			'.tp-caption.very_big_black': name + ' Very Big Black',
			'.tp-caption.modern_medium_fat': name + ' Medium Fat',
			'.tp-caption.modern_medium_fat_white': name + ' Medium Fat White',
			'.tp-caption.modern_medium_light': name + ' Medium Light',
			'.tp-caption.modern_big_bluebg': name + ' Blue Background',
			'.tp-caption.modern_big_redbg': name + ' Red Background',
			'.tp-caption.modern_small_text_dark': name + ' Small Dark Text',
			'.tp-caption.boxshadow': name + ' Shadow  Box',
			'.tp-caption.black': name + ' Black Text',
			'.tp-caption.noshadow': name + ' Shadowless Box',
			'.tp-caption.thinheadline_dark': name + ' Thin Dark Headline',
			'.tp-caption.thintext_dark': name + ' Think Dark Text',
			'.tp-caption.largeblackbg': name + ' Black Background',
			'.tp-caption.largepinkbg': name + ' Pink Background',
			'.tp-caption.largewhitebg': name + ' White Background',
			'.tp-caption.largegreenbg': name + ' Green Background',
			'.tp-caption.excerpt': name + ' Excerpt',
			'.tp-caption.large_bold_grey': name + ' Large Bold Grey Text',
			'.tp-caption.medium_thin_grey': name + ' Medium Thin Grey Text',
			'.tp-caption.small_thin_grey': name + ' Small Thin Grey Text',
			'.tp-caption.lightgrey_divider': name + ' Grey Divider',
			'.tp-caption.large_bold_darkblue': name + ' Large Bold Blue Text',
			'.tp-caption.medium_bg_darkblue': name + ' Blue Background',
			'.tp-caption.medium_bold_red': name + ' Red Bold Text',
			'.tp-caption.medium_light_red': name + ' Red Light Text',
			'.tp-caption.medium_bg_red': name + ' Red Background',
			'.tp-caption.medium_bold_orange': name + ' Orange Bold Text',
			'.tp-caption.medium_bg_orange': name + ' Orange Background',
			'.tp-caption.large_bold_white': name + ' Large Bold White Text',
			'.tp-caption.medium_light_white': name + ' Medium Light White Text',
			'.tp-caption.mediumlarge_light_white': name + ' Large Light White Text',
			'.tp-caption.mediumlarge_light_white_center': name + ' White Centered Text',
			'.tp-caption.medium_bg_asbestos': name + ' Asbestos Background ',
			'.tp-caption.medium_light_black': name + ' Light Black Text',
			'.tp-caption.large_bold_black': name + ' Bold Black Text',
			'.tp-caption.mediumlarge_light_darkblue': name + ' Light Blue Text',
			'.tp-caption.small_light_white': name + ' Small White Text',
			'.tp-caption.roundedimage': name + ' Rounded Image',
			'.tp-caption.large_bg_black': name + ' Black Background',
			'.tp-caption.mediumwhitebg': name + ' Medium White Background',
			'.tp-caption.MarkerDisplay': name + ' Marker',
			'.tp-caption.Restaurant-Display': name + ' Restaurant',
			'.tp-caption.Restaurant-Cursive': name + ' Restaurant Cursive',
			'.tp-caption.Restaurant-ScrollDownText': name + ' ScrollDown Text',
			'.tp-caption.Restaurant-Description': name + ' Description',
			'.tp-caption.Restaurant-Price': name + ' Price',
			'.tp-caption.Restaurant-Menuitem': name + ' Menu Item',
			'.tp-caption.Furniture-LogoText': name + ' Logo Text',
			'.tp-caption.Furniture-Plus': name + ' Plus',
			'.tp-caption.Furniture-Title': name + ' Title',
			'.tp-caption.Furniture-Subtitle': name + ' Subtitle',
			'.tp-caption.Gym-Display': name + ' Display',
			'.tp-caption.Gym-Subline': name + ' Subline',
			'.tp-caption.Gym-SmallText': name + ' Small Text',
			'.tp-caption.Fashion-SmallText': name + ' Small Text',
			'.tp-caption.Fashion-BigDisplay': name + ' Display',
			'.tp-caption.Fashion-TextBlock': name + ' Text Block',
			'.tp-caption.Sports-Display': name + ' Display',
			'.tp-caption.Sports-DisplayFat': name + ' Display (Fat)',
			'.tp-caption.Sports-Subline': name + ' Subline',
			'.tp-caption.Instagram-Caption': name + ' Caption',
			'.tp-caption.News-Title': name + ' Title',
			'.tp-caption.News-Subtitle': name + ' Subtitle',
			'.tp-caption.Photography-Display': name + ' Display',
			'.tp-caption.Photography-Subline': name + ' Subline',
            '.tp-caption.Photography-Subline span': name + ' Subline Span',
			'.tp-caption.Photography-ImageHover': name + ' Image Hover',
			'.tp-caption.Photography-Menuitem': name + ' Menu Item',
			'.tp-caption.Photography-Textblock': name + ' Text Block',
			'.tp-caption.Photography-Subline-2': name + ' Subline',
			'.tp-caption.Photography-ImageHover2': name + ' Image Hover',
			'.tp-caption.WebProduct-Title': name + ' Title',
			'.tp-caption.WebProduct-SubTitle': name + ' Subtitle',
			'.tp-caption.WebProduct-Content': name + ' Content',
			'.tp-caption.WebProduct-Menuitem': name + ' Menu Item',
			'.tp-caption.WebProduct-Title-Light': name + ' Title',
			'.tp-caption.WebProduct-SubTitle-Light': name + ' Subtitle',
			'.tp-caption.WebProduct-Content-Light': name + ' Content',
			'.tp-caption.FatRounded': name + ' Fat Rounded',
			'.tp-caption.NotGeneric-Title': name + ' Title',
			'.tp-caption.NotGeneric-SubTitle': name + ' Subtitle',
			'.tp-caption.NotGeneric-CallToAction': name + ' Call To Action',
			'.tp-caption.NotGeneric-Icon': name + ' Icon',
			'.tp-caption.NotGeneric-Menuitem': name + ' Menu Item',
			'.tp-caption.MarkerStyle': name + ' Marker',
			'.tp-caption.Gym-Menuitem': name + ' Menu Item',
			'.tp-caption.Newspaper-Button': name + ' Button',
			'.tp-caption.Newspaper-Subtitle': name + ' Subtitle',
			'.tp-caption.Newspaper-Title': name + ' Title',
			'.tp-caption.Newspaper-Title-Centered': name + ' Centered Title',
			'.tp-caption.Hero-Button': name + ' Hero Button',
			'.tp-caption.Video-Title': name + ' Title',
			'.tp-caption.Video-SubTitle': name + ' Subtitle',
			'.tp-caption.NotGeneric-Button': name + ' Button',
			'.tp-caption.NotGeneric-BigButton': name + ' Big Button',
			'.tp-caption.WebProduct-Button': name + ' Button',
			'.tp-caption.Restaurant-Button': name + ' Button',
			'.tp-caption.Gym-Button': name + ' Button',
			'.tp-caption.Gym-Button-Light': name + ' Button',
			'.tp-caption.Sports-Button-Light': name + ' Button',
			'.tp-caption.Sports-Button-Red': name + ' Button',
			'.tp-caption.Photography-Button': name + ' Button',
			'.tp-caption.Newspaper-Button-2': name + ' Button',
						".tp-caption.NotGeneric-Title": name + " Title",
						".tp-caption.NotGeneric-SubTitle": name + " SubTitle",
						".tp-caption.NotGeneric-Icon": name + " Icon",
						".tp-caption.NotGeneric-CallToAction": name + " Call to Action",
						".tp-caption.Hero-Button": name + " Button",

						".tp-leftarrow": {
							 "": name + " Left Arrow",
							 ".tp-title-wrap" : name + " Left Arrow Title Wrap",

							 ".tp-arr-imgholder": name + " Left Arrow Title Image",
							 ".tp-arr-titleholder": name + " Left Arrow Title Text",
						},

						".tp-rightarrow": {
							 "": name + " Right Arrow",
							 ".tp-title-wrap" : name + " Right Arrow Title Wrap",

							 ".tp-arr-imgholder": name + " Right Arrow Title Image",
							 ".tp-arr-titleholder": name + " Right Arrow Title Text",
						},
						".tp-thumbs": name + " Thumbs Container",
						".tp-thumb": name + " Thumb",
						".tp-thumb .tp-thumb-img-wrap": name + " Thumb Image Wrap",
						".tp-thumb .tp-thumb-image": name + " Thumb Image",
						".tp-thumb .tp-thumb-title": name + " Thumb Title",
						".tp-thumb.selected": name + " Selected Thumb",

						".tp-thumb.selected .tp-thumb-img-wrap": name + " Thumb Image Wrap",
						".tp-thumb.selected .tp-thumb-image": name + " Thumb Image",
						".tp-tabs": name + " Tabs",
						".tp-tabs .tp-tabs-inner-wrapper": name + " Tabs Wrapper",
						".tp-tabs .tp-tabs-inner-wrapper .tp-tab": {
							"":name + " Tab",
							".tp-tab-date": name + " Tab Date",
							".tp-tab-title": name + " Tab Title",
                            ".tp-tab-desc": name + " Tab Desc",
							".tp-tab-image": name + " Tab Image",
						},
						".tp-tabs .tp-tabs-inner-wrapper .tp-tab.selected": {
							"":name + " Selected Tab",
							".tp-tab-date": name + " Selected Tab Date",
							".tp-tab-title": name + " Selected Tab Title",
                            ".tp-tab-desc": name + " Selected Tab Desc",
							".tp-tab-image": name + " Selected Tab Image",
						},
						".rev-btn": name + " Button",
                        ".Feature-Examples.rev-btn": name + " Button",
                        ".Feature-Tour.rev-btn": name + " Button",
						".rs-background-video-layer": name +  "  Background Video",
						".tp-caption.Twitter-Content":  name +  " Twitter Caption",
						".tp-caption.Twitter-Content a":  name +  " Twitter Caption  Link",
						".tp-caption.Twitter-Content":  name +  " Twitter Caption",
						".tp-caption.Twitter-Favorites": name + " Twitter Favorites Button",
						".tp-caption.Twitter-Retweet": name + " Twitter Retweet Button",
						".tp-caption.Twitter-Link": name + " Twitter Link Button",
						".tp-caption.Twitter-Favorites i": name + " Twitter Favorites Icon",
						".tp-caption.Twitter-Retweet i": name + " Twitter Retweet Icon",
						".tp-caption.Twitter-Link i": name + " Twitter Link Icon",
                        
						// ELEMENTS ADDED BY C 
							
						".tp-bullet-image": name + " Bullet Image",
						".tp-bullet-title": name + " Bullet Image Title",
						// add pseudo .tp-bullet-title::after 
							
						".tp-bullets .tp-bullet": name + " Bullets",
						".tp-bullets .tp-bullet.selected": name + " Bullets Selected",
						//add ".tp-bullets .tp-bullet.selected:after": name + " Bullets Selected",
						".tp-bullets .tp-bullet span.tp-bullet-inner": name + " Bullets Inner",
						".tp-bullets .tp-bullet.selected span.tp-bullet-inner": name + " Bullets Inner Selected",
						
						

				};
				var extraSelectors = {
						"input[type=button],input[type=submit],button,a.button, a.btn":"Button",
						"input[type=text]":"Textbox",
						"img":"Image",
						"select":"Dropdown"
				};

				csshero_from_json("",obj, function(addedSelector, addedName) {
						mixinSelectors(addedSelector, addedName, extraSelectors);
				});
				// Now get all generic layers
				jQuery('.tp-caption.tp-resizeme',frame).each(function() {

					var layerid = jQuery(this).attr('id');
					if (layerid.indexOf('-layer-')  > 0)
					 layerid =   "Layer " + layerid.split('-')[3];
						csshero_declare_item('#' + jQuery(this).attr('id'), name + " " + layerid );
				});

}

function csshero_theme_declarations_revslider(){
		window.setTimeout(function() {
				jQuery('.rev_slider_wrapper',frame).each(function() {
						var alias = "Slider #" +jQuery(this,frame).attr('id').split('_')[3];
						addRevolutionSlider(alias,this);
				});
		},100);
}


csshero_theme_declarations_revslider(); // launch it!




window.csshero_plugin_is_configurated = true;// <script> USED TO DEFINE CARDS
wcom_card = function(scope,desc){

	csshero_declare_item(scope,desc);
	csshero_declare_item(scope+' ul.products li.product > a:not(.button)',desc+' Main Link');
	csshero_declare_item(scope+' > h2',desc+' Area Title');
	csshero_declare_item(scope+' ul.products',desc+' List Area');
	csshero_declare_item(scope+' ul.products li.product',desc+' Item');
	csshero_declare_item(scope+' ul.products li.product a img',desc+' Img');
	csshero_declare_item(scope+' ul.products li.product h3',desc+' Title');
	csshero_declare_item(scope+' ul.products li.product h3 .count',desc+' Product Count');
	csshero_declare_item(scope+' ul.products li.product .price',desc+' Price Area');
	
	csshero_declare_item(scope+' ul.products li.product .price del',desc+' Old Price');
	csshero_declare_item(scope+' ul.products li.product .price ins',desc+' New Price');
	csshero_declare_item(scope+' ul.products li.product a.button',desc+' Buttons');
	csshero_declare_item(scope+' ul.products li.product .star-rating',desc+' Star Rating Area');

	csshero_declare_item(scope+' ul.products li.product .woocommerce-loop-product__title',desc+' Product Title');
}

wcom_product = function(scope,desc){
	csshero_config_post(scope+' div[itemprop=description]','',desc);
	csshero_config_post(scope+' .entry-summary','','Summary');
	csshero_config_post(scope+' .woocommerce-tabs #tab-description','',desc+' Tab Desc');
	csshero_declare_item(scope,desc);
	csshero_declare_item(scope+' .product_title',desc+' Title');
	csshero_declare_item(scope+' .woocommerce-product-rating',desc+' Rating Area');
	csshero_declare_item(scope+' .woocommerce-review-link',desc+' Reviews Link');
	csshero_declare_item(scope+' .price',desc+' Price Area');
	
	csshero_declare_item(scope+' .woocommerce-product-gallery__wrapper',desc+' Gallery Area')
	csshero_declare_item(scope+' .woocommerce-product-gallery__trigger',desc+' Gallery Trigger')
	csshero_declare_item(scope+' .price .amount',desc+' Price');
	csshero_declare_item(scope+' .price del',desc+' Old Price');
	csshero_declare_item(scope+' .price ins',desc+' New Price');
	csshero_declare_item(scope+' form.cart',desc+' Quantity Area');
	csshero_declare_item(scope+' form.cart div.quantity',desc+' Quantity Form');
	csshero_declare_item(scope+' form.cart div.quantity .plus',desc+' Quantity Plus');
	csshero_declare_item(scope+' form.cart div.quantity .minus',desc+' Quantity Minus');
	csshero_declare_item(scope+' form.cart div.quantity input.qty',desc+' Quantity Qty');
	
	csshero_declare_item(scope+' form.cart .button',desc+' Add To Cart');
	csshero_declare_item(scope+' div.images',desc+' Images Area');
	csshero_declare_item(scope+' div.images .wp-post-image',desc+' Image');
	csshero_declare_item(scope+' div.images .thumbnails',desc+' Thumbs Area');
	csshero_declare_item(scope+' div.images .thumbnails .attachment-shop_thumbnail',desc+' Thumb');
	csshero_declare_item(scope+' .product_meta',desc+' Meta Area');
	csshero_declare_item(scope+' .product_meta > span',desc+' Meta Inner Area');
	
	csshero_declare_item(scope+' p.cart',desc+' Cart Button Area'); 
	csshero_declare_item(scope+' .single_add_to_cart_button',desc+' Cart Button');
	csshero_declare_item(scope+' .product_meta a',desc+' Meta Link');
	csshero_declare_item(scope+' .woocommerce-tabs',desc+' Tabs Area');
	csshero_declare_item(scope+' .woocommerce-tabs ul.tabs',desc+' Tabs');
	csshero_declare_item(scope+' .woocommerce-tabs ul.tabs li',desc+' Tab');
	csshero_declare_item(scope+' .woocommerce-tabs ul.tabs li.active',desc+' Active Tab');
	
	csshero_declare_item(scope+' .woocommerce-tabs ul.tabs li a',desc+' Tab Link');
	csshero_declare_item(scope+' .woocommerce-tabs ul.tabs li.active a',desc+' Active Tab Link');
	
	
	csshero_declare_item(scope+' .woocommerce-tabs #reviews textarea',desc+' Review Textarea');
	csshero_declare_item(scope+' .woocommerce-tabs #reviews input',desc+' Review Input');
	csshero_declare_item(scope+' .woocommerce-tabs #reviews input[type=submit]',desc+' Submit Review');
	csshero_declare_item(scope+' .star-rating',scope+' Star Rating Area');
	csshero_declare_item(scope+' .stock',desc+' Stock');

	csshero_declare_item(scope+' .comment-form-rating',desc+' Rating Area');
	csshero_declare_item(scope+' .comment-form-rating label',desc+' Rating Area Title');
	csshero_declare_item(scope+' .comment-form-rating .stars',desc+' Rating Stars Area');
	csshero_declare_item(scope+' .comment-form-rating .stars a',desc+' Rating Area Single Star');

	csshero_declare_item(scope+' #comments', desc+' Revs Area');
	csshero_declare_item(scope+' #comments > h2', desc+' Revs Title');
	csshero_declare_item(scope+' #comments .comment', desc+' Review Area');
	csshero_declare_item(scope+' #comments .comment .avatar', desc+' Review Avatar');
	csshero_declare_item(scope+' #comments .comment .comment-text', desc+' Review Text');
	csshero_declare_item(scope+' #comments .comment .meta', desc+' Review Meta');
	csshero_declare_item(scope+' #comments .comment .meta strong', desc+' Review Author');
	csshero_declare_item(scope+' #comments .comment .meta time', desc+' Review Date');
	csshero_config_post(scope+' #comments .comment .description','','Review');

	csshero_declare_item(scope+' #comments h3#reply-title',desc+' Reply Title');
	csshero_declare_item(scope+' #comments p.stars',desc+' Stars Area');
	csshero_declare_item(scope+' #comments textarea#comment',desc+' Reply Textarea');
	csshero_declare_item(scope+' #comments #submit',desc+' Submit Reply');

	// GFORMS VARIATIONS ADDON
	csshero_declare_item(scope+' .gform_variation_wrapper',desc+' Variations Wrapper');
	csshero_declare_item(scope+' .variations',desc+' Variations Area');
	csshero_declare_item(scope+' .variations .label',desc+' Variations Label');
	csshero_declare_item(scope+' .variations .value',desc+' Variations Value');
	csshero_declare_item(scope+' .variations .value select',desc+' Variations Value Select');

}

wcom_notice = function(scope,desc){
	csshero_declare_item(scope+' .woocommerce-info',desc+' Info');
	csshero_declare_item(scope+' .woocommerce-info .showcoupon',desc+' Show Coupon Link');
	csshero_declare_item(scope+' .woocommerce-error',desc+' Error');
	csshero_declare_item(scope+' .woocommerce-error li',desc+' Error List Item');
	csshero_declare_item(scope+' .woocommerce-error li strong',desc+' Error List Strong');
}

wcom_checkout = function(scope,desc){
	csshero_declare_item(scope+' form.checkout_coupon',desc+' Coupon Area');
	csshero_declare_item(scope+' form.checkout_coupon .input-text',desc+' Coupon Field');
	csshero_declare_item(scope+' form.checkout_coupon input[name=apply_coupon]',desc+' Coupon Submit');
	csshero_declare_item(scope+' #customer_details',scope+' Customer Details Area');
	csshero_declare_item(scope+' #customer_details .col-1',scope+' Customer Details Col1');
	csshero_declare_item(scope+' #customer_details .col-2',scope+' Customer Details Col2');
	csshero_declare_item(scope+' form.checkout',desc+' Form');

	csshero_declare_item(scope+' form.checkout h3',desc+' Titles');
	csshero_declare_item(scope+' form.checkout .form-row',desc+' Form Row');
	csshero_declare_item(scope+' form.checkout .form-row label',desc+' Form Label');
	csshero_declare_item(scope+' form.checkout .form-row label .required',desc+' Required Icon');
	csshero_declare_item(scope+' form.checkout .form-row .input-text',desc+' Input');

	csshero_declare_item(scope+' #order_review',scope+' Order Review Area');
	csshero_declare_item(scope+' #order_review table.shop_table',scope+' Order Table');
	csshero_declare_item(scope+' #order_review table.shop_table th',scope+' Order Table Heading');
	csshero_declare_item(scope+' #order_review table.shop_table td',scope+' Order Table Cell');

	csshero_declare_item(scope+' #payment',desc+' Payment Area');

	csshero_declare_item(scope+' #payment ul.payment_methods',desc+' Payment List');
	csshero_declare_item(scope+' #payment ul.payment_methods li',desc+' Payment Method');
	csshero_declare_item(scope+' #payment ul.payment_methods li .payment_box',desc+' Payment Suggestion');
	csshero_declare_item(scope+' #payment div.form-row',desc+' Place Row');
	csshero_declare_item(scope+' #payment div.form-row .button',desc+' Place Btn');
}


wcom_widget = function(scope,desc){
	csshero_declare_item(scope+' ul.product_list_widget',desc+' List');
	csshero_declare_item(scope+' ul.product_list_widget li',desc+' Item');
	csshero_declare_item(scope+' ul.product_list_widget li .reviewer',desc+' Reviewer');
	csshero_declare_item(scope+' ul.product_list_widget li .wp-post-image',desc+' Img');
	csshero_declare_item(scope+' ul.product_list_widget li .amount',desc+' Price');
	csshero_declare_item(scope+' ul.product_list_widget li del',desc+' Old Price');
	csshero_declare_item(scope+' ul.product_list_widget li ins',desc+' New Price');
	csshero_declare_item(scope+' ul.product_list_widget li .star-rating',desc+' Stars');
	csshero_declare_item(scope+' .widget-title',desc+' Title');
	csshero_declare_item(scope+' a',desc+' Link');
	csshero_declare_item(scope+' a.remove',desc+' Remove Icon');
	csshero_declare_item(scope+' .quantity',desc+' Qty');
	csshero_declare_item(scope+' .total',desc+' Total Area');
	csshero_declare_item(scope+' .total strong',desc+' Total Desc');
	csshero_declare_item(scope+' .total .amount',desc+' Total Price');
	csshero_declare_item(scope+' .buttons',desc+' Buttons Area');
	csshero_declare_item(scope+' .buttons .button',desc+' Btn');
	csshero_declare_item(scope+' .buttons .button.checkout',desc+' Checkout Btn');
	csshero_declare_item(scope+'.widget_price_filter .ui-slider .ui-slider-range',desc+' Price Slider Range');
	csshero_declare_item(scope+'.widget_price_filter .ui-slider .ui-slider-handle',desc+' Price Slider Handle');
	
}

wcom_cart = function(scope,desc){
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart','WCOM Cart Table');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart thead','WCOM Cart T Head');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart thead th','WCOM Cart T Head Tab');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart tbody td','WCOM Cart T Body');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-remove','WCOM Cart Remove');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-remove a.remove','WCOM Cart Remove Btn');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-thumbnail','WCOM Cart Thumb');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-thumbnail img','WCOM Cart Thumb Img');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-name','WCOM Cart Name');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-name a','WCOM Cart Name Link');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-price','WCOM Cart Price');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-price .amount','WCOM Cart Price Amount');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-quantity','WCOM Cart Qty');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-subtotal','WCOM Cart Subtotal');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-subtotal .amount','WCOM Cart Subtotal Amount');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions','WCOM Cart Actions');

	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity','WCOM Cart Quantity Form');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity .plus','WCOM Cart Quantity Plus');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity .minus','WCOM Cart Quantity Minus');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity input.qty','WCOM Cart Quantity Qty');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions #coupon_code','WCOM Cart Coupon Input');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=apply_coupon]','WCOM Cart Coupon Btn');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=update_cart]','WCOM Update Cart');
	csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=proceed]','WCOM Proceed Btn');

	csshero_declare_item('.woocommerce .woocommerce-message','WCOM Message Area');
	csshero_declare_item('.woocommerce .woocommerce-message .button','WCOM Message Area Button');
	csshero_declare_item('.woocommerce .wc-proceed-to-checkout','Proceed To Check-out Area');
	csshero_declare_item('.woocommerce .wc-proceed-to-checkout .button','Proceed To Check-out Button');

	// WILL PROBABLY NEED TO ADD MORE...
	csshero_declare_item('body.et_color_scheme_red.woocommerce-page .wc-proceed-to-checkout a.button','Proceed To Check-out Button');

	csshero_declare_item('.woocommerce .cart-collaterals','WCOM Cart Totals Area');
	csshero_declare_item('.woocommerce .cart-collaterals .cart_totals','WCOM Cart Totals');
	csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table','WCOM Cart Totals Table');
	csshero_declare_item('.woocommerce .cart-collaterals .cart-discount a','WCOM Remove Coupon');
	csshero_declare_item('.woocommerce .cart-collaterals .cart_totals h2','WCOM Cart Totals Titles');
	csshero_declare_item('.woocommerce .cross-sells','Cross Sells Area');
	csshero_declare_item('.woocommerce .cross-sells > h2','Cross Sells Area TItle');
	csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table','WCOM Cart Totals Table');
	csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table th','WCOM Cart Totals Th');
	csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table td','WCOM Cart Totals Td');

	csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator','WCOM Cart Shipping Area');
	csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator h2 a.shipping-calculator-button','WCOM Cart Shipping Btn');
	csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator .form-row','WCOM Cart Shipping Row');
	csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator .form-row input.input-text','WCOM Cart Shipping Input');
	csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator button[name=calc_shipping]','WCOM Cart Shipping Btn');
}

wcom_track = function(scope,desc){
	csshero_declare_item(scope+' form.track_order',desc+' Form');
	csshero_declare_item(scope+' form.track_order label',desc+' Label');
	csshero_declare_item(scope+' form.track_order .input-text',desc+' Input');
	csshero_declare_item(scope+' form.track_order .button',desc+' Btn');
}

wcom_generic = function(scope){
	csshero_declare_item(scope+' h1.page-title','WCOM Page Title');
	csshero_declare_item(scope+' p.woocommerce-result-count','WCOM Result Count');
	csshero_declare_item(scope+' form.woocommerce-ordering','WCOM Ordering Form');
	csshero_declare_item(scope+' .woocommerce-breadcrumb','WCOM Breadcrumb Area');
	csshero_declare_item(scope+' .woocommerce-breadcrumb a','WCOM Breadcrumb Link');
	csshero_declare_item(scope+' span.onsale','WCOM Sale Icon');
	csshero_declare_item(scope+' .storefront-sorting','Sorting Area');
	csshero_declare_item(scope+' .site-header-cart .cart-contents','Widget Main');
}

wcom_final_checkout = function(scope,desc){
	csshero_declare_item(scope+' .woocommerce h2',desc+' Title');
	csshero_declare_item(scope+' .woocommerce p',desc+' Paragraph');
	csshero_declare_item(scope+' .woocommerce .order_details',desc+' Details');
	csshero_declare_item(scope+' .woocommerce .order_details li',desc+' Details Tab');
	csshero_declare_item(scope+' .woocommerce .order_details strong',desc+' Details Value');
	csshero_declare_item(scope+' .woocommerce .shop_table',desc+' Table');
	csshero_declare_item(scope+' .woocommerce .shop_table th',desc+' Product TH');
	csshero_declare_item(scope+' .woocommerce .shop_table td',desc+' Product TD');
	csshero_declare_item(scope+' .woocommerce table a',desc+' Product Table Link');
	csshero_declare_item(scope+' .woocommerce dl.customer_details',desc+ ' Customer Details Area');
	csshero_declare_item(scope+' .woocommerce dl.customer_details dt',desc+' Customer DT');
	csshero_declare_item(scope+' .woocommerce dl.customer_details dd',desc+' Customer DD');
	csshero_declare_item(scope+' .woocommerce .addresses',desc+' Addresses Area');
	csshero_declare_item(scope+' .woocommerce .addresses .title',desc+' Addresses Title Area');
	csshero_declare_item(scope+' .woocommerce .addresses .title h3',desc+' Addresses Title');
	csshero_declare_item(scope+' .woocommerce .addresses address p',desc+' Address');
}

wcom_pagination = function(scope){
	csshero_declare_item(scope+' .woocommerce-pagination','WCOM Pagination Area');
	csshero_declare_item(scope+' .woocommerce-pagination .page-numbers','WCOM Pagination');
	csshero_declare_item(scope+' .woocommerce-pagination a.page-numbers','WCOM Pagination Item');
	csshero_declare_item(scope+' .woocommerce-pagination .page-numbers.current','WCOM Current Pagination Item');
	csshero_declare_item(scope+' .woocommerce-pagination .page-number','WCOM Pagination Item');
	csshero_declare_item(scope+' .woocommerce-pagination .page-number.current','WCOM Current Pagination Item');
}





	// WOOCOMMERCE I WILL BEAT YOU!
	wcom_cart();
	wcom_generic('.woocommerce');
	wcom_card('.woocommerce','WCOM Product List');
	wcom_card('.hentry .woocommerce','WCOM Embedded Product');
	wcom_card('.woocommerce .related','WCOM Related Products');
	wcom_card('.woocommerce .upsells','WCOM Upsells Products');

	wcom_product('.woocommerce div.product','WCOM Product');
	wcom_product('.woocommerce #content div.product','WCOM Product');

	// ADDED FOR DIVI COMPLIANCE
	wcom_product('.woocommerce #content-area div.product','WCOM Product (Divi)');


	wcom_notice('.woocommerce','WCOM');
	wcom_checkout('.woocommerce','WCOM Checkout');
	wcom_track('.woocommerce','WCOM Tracking');
	wcom_card('.woocommerce .cross-sells','Related Sells');
	wcom_final_checkout('.woocommerce-checkout','WCOM Checkout');
	wcom_pagination('.woocommerce');

	//FINO QUI VANNO SDOPPIATI TUTTI MI SA CON .woocommerce-page
	// ESEMPIO DI STRUTTURA DEL CSS, vedremo come fare:
	//    .woocommerce #content div.product .woocommerce-tabs
	//    .woocommerce div.product .woocommerce-tabs
	//    .woocommerce-page #content div.product .woocommerce-tabs
	//    .woocommerce-page div.product .woocommerce-tabs



	wcom_widget('.et_pb_widget.woocommerce','WCOM Widget');
	wcom_widget('.woocommerce.widget','WCOM Widget');
	wcom_widget('.woocommerce.widget.widget_products','WCOM Widget Prods');
	wcom_widget('.woocommerce.widget.widget_recent_reviews','WCOM Widget Revs');
	wcom_widget('.woocommerce.widget.widget_shopping_cart','WCOM Shopping Cart');
window.csshero_plugin_is_configurated = true;	console.log('LOADING CONFIG')
	 setTimeout(function () {
	     //and call `resolve` on the deferred object, once you're done
	    csshero_promise.resolve();
	  }, 100);
	
	return csshero_promise;
	
}

function hero_get_theme_name(){
	return "astra";
}

function theme_config_load_has_failed(){
	  return true; }

function hero_get_api_key(){
	return "6144565deea052703b7fee265fba5e21736";
}

