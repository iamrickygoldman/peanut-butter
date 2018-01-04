# Peanut Butter
Peanut Butter is minimalist a front end responsive framework designed for programmers. It provides a grid, a CSS reset, SCSS mixins, and no bloat. The framework can be used out of the box or customized using SCSS.

## Installation
    <link href="/path/to/pb-core.css" rel="stylesheet" type="text/css">

## Usage
#### 12 Column Grid
To use the grid, simply create a container with the class "pb-jar-smooth" or "pb-jar-chunky". The "pb-row" will make sure to clear all floats, then place the columns inside.

    <div class="pb-jar-smooth">
        <div class="pb-row">
            <div class="pb-col-sm-6" data-pb-height="example1">

            </div>
            <div class="pb-col-sm-6" data-pb-height="example1">

            </div>
        </div>
    </div>

There are 2 kinds of containers (or "jars" to stick with the theme).

1. **pb-jar-smooth** - width: 100%
2. **pb-jar-chunky** - fixed width which breaks down responsively (ie from 992-1200px screen width, the jar is 970px wide)

The class name of the column determines its behavior. All column class names begin with "pb-col-". The size determines when the column collapses into full width.

1. **xl** - will be full width at screen widths smaller than $screen-xl-min (1400px)
2. **lg** - will be full width at screen widths smaller than $screen-lg-min (1200px)
3. **md** - will be full width at screen widths smaller than $screen-md-min (992px)
4. **sm** - will be full width at screen widths smaller than $screen-sm-min (768px)
5. **tb** - will be full width at screen widths smaller than $screen-tb-min (481px)
6. **mb** - will never be full width

The number determines the width of the column. For example "pb-col-mb-3" will be 3 columns wide. On the 12 column grid, that will be width: 25%.

#### SCSS Customization
The following can all be customized via SCSS variables:

- **responsive breakpoints**
- **chunky jar widths**
- **grid gutter width**

To make updating easily, it is recommended all variables are overridden in the pb-variables-override.scss file and the pb-variables.scss file is left untouched. All custom css should be placed in pb-style.scss. The pb-core.scss file imports all of these files and compiles into pb-core.css which should be included in your project.

#### SCSS Utilities
Mixins and utility classes available for use are located in pb-utilities.scss. You may only use the mixins if you are compiling from SCSS, but utility classes are always available.

- **CSS3 transitions**
- **antialias / subpixel rendering**
- **input placeholder text color**
- **retina images**