/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/display-name */
import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Paragraph } = Typography;

export const options = {
    renderMark: {
        [MARKS.BOLD]: text => <span className="font-bold">{text}</span>,
        [MARKS.ITALIC]: text => <span className="italic">{text}</span>,
        [MARKS.UNDERLINE]: text => <span className="underline">{text}</span>,
        [MARKS.CODE]: text => <span className="bg-gray-100 text-left text-gray-900 text-xs inline-block p-2 border overflow-auto">{text}</span>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-4 text-base text-justify">{children}</p>,
        [BLOCKS.HEADING_1]: (node, children) => <h1 className="my-4 text-6xl text-justify ">{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className="my-4 text-5xl text-justify">{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3 className="my-4 text-4xl text-justify">{children}</h3>,
        [BLOCKS.HEADING_4]: (node, children) => <h4 className="my-4 text-3xl text-justify">{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => <h5 className="my-4 text-2xl text-justify">{children}</h5>,
        [BLOCKS.HEADING_6]: (node, children) => <h6 className="my-4 text-xl text-justify">{children}</h6>,
        [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc my-10 px-4">{children}</ul>,
        [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal my-10 px-4">{children}</ol>,
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="-my-4">{children}</li>,
        [BLOCKS.QUOTE]: (node, children) => <span className="block border-l-4 border-gray-200 italic pl-4">{children}</span>,
        [BLOCKS.EMBEDDED_ENTRY]: node => {
            const {
                data: {
                    target: {
                        fields: {
                            title, description, slug, featuredImage,
                        },
                    },
                },
            } = node;
            return (
                <div className="my-5 border border-gray-200 py-4 px-2 flex flex-row items-center">
                    <img src={featuredImage.fields.file.url} alt={featuredImage.fields.file.title} className="h-16 w-16 object-cover bg-gray-200" />
                    <div className="ml-5">
                        <Link to={`/blog/${slug}`}><h3 className="text-sm font-bold text-gray-900">{title}</h3></Link>
                        <Paragraph ellipsis={{ rows: 3 }} className="text-gray-600 text-xs">
                            {description}
                        </Paragraph>
                    </div>
                </div>
            );
        },
        [BLOCKS.EMBEDDED_ASSET]: node => {
            const { data: { target: { fields } } } = node;
            return (
                <div className="max-w-md mx-auto">
                    <img src={fields.file.url} alt={fields.title} className="w-full" />
                </div>
            );
        },
        [INLINES.EMBEDDED_ENTRY]: node => {
            const {
                data: {
                    target: {
                        fields: {
                            title, slug,
                        },
                    },
                },
            } = node;
            return <Link to={`/blog/${slug}`} className="text-alt-blue hover:underline">{title}</Link>;
        },
        [INLINES.ENTRY_HYPERLINK]: (node, children) => (
            <Link
                to={`/blog/${node.data.target.fields.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-alt-blue hover:underline cursor-pointer"
            >
                {children}
            </Link>
        ),
        [INLINES.ASSET_HYPERLINK]: (node, children) => (
            <a
                href={node.data.target.fields.file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-alt-blue hover:underline cursor-pointer"
            >
                {children}
            </a>
        ),
        [INLINES.HYPERLINK]: (node, children) => (
            <a
                href={node.data.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="text-alt-blue hover:underline cursor-pointer"
            >
                {children}
            </a>
        ),

    },
};
