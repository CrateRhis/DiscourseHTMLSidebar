import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';

createWidget('sidebar-content',
	{
		tagName: 'div.sidebar-content',

		html(attrs)
		{
			return h('div', {innerHTML: Discourse.SiteSettings.sidebar_content});
		},
	}
);
