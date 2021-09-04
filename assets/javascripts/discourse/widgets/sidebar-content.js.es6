import { createWidget } from 'discourse/widgets/widget';
import { RawHtml } from 'discourse/widgets/raw-html';
import { h } from 'virtual-dom';

createWidget('sidebar-content',
	{
		tagName: 'div.sidebar-content',

		html(attrs)
		{
			return new RawHtml({ html: `<div>${this.siteSettings.sidebar_content}</div>` });
		},
	}
);
