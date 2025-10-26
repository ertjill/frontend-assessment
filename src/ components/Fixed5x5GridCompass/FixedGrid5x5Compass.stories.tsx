import type { Meta, StoryObj } from '@storybook/react';

import Grid5x5Compass from './FixedGrid5x5Compass';

const meta: Meta<typeof Grid5x5Compass> = {
     component: Grid5x5Compass,
     tags: ['autodocs'],
      title: 'Components/Grid5x5Compass'
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NORTH_2_2 : Story = {
    args :{
      positionDirectionProps:'2,2 NORTH'
    }
}

export const EAST_3_3 : Story = {
    args :{
      positionDirectionProps:'3,3 EAST'
    }
}

export const EAST_3_4 : Story = {
    args :{
      positionDirectionProps:'3,4 EAST'
    }
}

export const WEST_1_1 : Story = {
    args :{
      positionDirectionProps:'1,1 WEST'
    }
}

export const NORTH_4_0 : Story = {
    args :{
      positionDirectionProps:'4,0 NORTH'
    }
}

export const SOUTH_4_4 : Story = {
    args :{
      positionDirectionProps:'4,4 SOUTH'
    }
}

export const SOUTH_0_0 : Story = {
    args :{
      positionDirectionProps:'0,0 SOUTH'
    }
}

export const SOUTH_0_4 : Story = {
    args :{
      positionDirectionProps:'0,4 SOUTH'
    }
}
export const NO_INPUT : Story = {
    args :{
      positionDirectionProps:''
    }
}

export const A_B_NORTH : Story = {
    args :{
      positionDirectionProps:'A_B_NORTH'
    }
}

export const NO_DIRECTION_1_2 : Story = {
    args :{
      positionDirectionProps:'1,2'
    }
}