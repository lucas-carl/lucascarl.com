import {Navigation} from 'components/Layout/Navigation';

import {Wrapper, StickyNav} from 'components/Layout/Header/styles';

export const Header = () => {
    return (
        <StickyNav>
            <Wrapper>
                <div>
                    <Navigation href="/" text="Portfolio" />
                </div>
            </Wrapper>
        </StickyNav>
    );
};
