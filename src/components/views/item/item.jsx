import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';
import Content from './../../elements/simple/content';

export default class Item extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Item image
         */
        image: React.PropTypes.string,
        /**
         * Vertical alignment of content
         */
        contentAligned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Content: Content
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        const { component, defaultClasses, children, image, contentAligned, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(other.className, this.getClasses());
        const Component = component;
        return (
            <Component {...other}>
                {image &&
                    <div className="image">
                        <img src={image}/>
                    </div>
                }
                <Item.Components.Content aligned={contentAligned}>
                    {children}
                </Item.Components.Content>
            </Component>
        );
    }

    getClasses() {
        return {
            // variations
            // component
            item: this.props.defaultClasses
        };
    }
}
