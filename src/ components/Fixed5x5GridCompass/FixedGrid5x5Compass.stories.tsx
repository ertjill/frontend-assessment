import type { Meta, StoryObj } from '@storybook/react';

import Grid5x5Compass from './FixedGrid5x5Compass';

const meta: Meta<typeof Grid5x5Compass> = {
     component: Grid5x5Compass,
     tags: ['autodocs'],
      title: 'Components/Grid5x5Compass'
};

export default meta;

type Story = StoryObj<typeof meta>;

/** 2,2 NORTH */
export const NORTH_2_2 : Story = {
    args :{
      positionDirectionProps:'2,2 NORTH'
    }
}

/** 3,3 EAST */
export const EAST_3_3 : Story = {
    args :{
      positionDirectionProps:'3,3 EAST'
    }
}

/** 3,4 EAST */
export const EAST_3_4 : Story = {
    args :{
      positionDirectionProps:'3,4 EAST'
    }
}

/** 1,1 WEST */
export const WEST_1_1 : Story = {
    args :{
      positionDirectionProps:'1,1 WEST'
    }
}

/** 4,0 NORTH */
export const NORTH_4_0 : Story = {
    args :{
      positionDirectionProps:'4,0 NORTH'
    }
}

/** 4,4 SOUTH */
export const SOUTH_4_4 : Story = {
    args :{
      positionDirectionProps:'4,4 SOUTH'
    }
}

/** 0,0 SOUTH */
export const SOUTH_0_0 : Story = {
    args :{
      positionDirectionProps:'0,0 SOUTH'
    }
}

/** 0,4 SOUTH */
export const SOUTH_0_4 : Story = {
    args :{
      positionDirectionProps:'0,4 SOUTH'
    }
}

/** No input string*/
export const NO_INPUT : Story = {
    args :{
      positionDirectionProps:''
    }
}

/** Not a valid number for x and y axis.*/
export const A_B_NORTH : Story = {
    args :{
      positionDirectionProps:'A,B NORTH'
    }
}
/** No Direction from input string.*/
export const NO_DIRECTION_1_2 : Story = {
    args :{
      positionDirectionProps:'1,2'
    }
}