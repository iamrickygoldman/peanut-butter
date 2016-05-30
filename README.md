# Peanut Butter
Peanut Butter is minimalist a front end responsive framework designed for programmers. It provides a grid, a CSS reset,  some basic javascript utilities, and no bloat. The framework can be used out of the box or customized using SCSS.

## Installation
    <link href="/path/to/pb-core.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="/path/to/pb-utilities.js"></script>

## Usage
##### 12 Column Basic Grid
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

##### SCSS Customization
The following can all be customized via SCSS variables:

- **responsive breakpoints**
- **chunky jar widths**
- **grid gutter width**

To make updating easily, it is recommended all variables are overridden in the pb-variables-override.scss file and the pb-variables.scss file is left untouched. All custom css should be placed in pb-style.scss. The pb-core.scss file imports all of these files and compiles into pb-core.css which should be included in your project.

##### Javascript Utilities
At this time, there is only one javascript utility included in Peanut Butter - equal heights. Any time two or more elements - columns or not - need to be equal heights, this plugin will responsively set each element's height to match the tallest. To use, simply apply the attribute "data-pb-height" with the same value to all elements. Here is an example:

    <div class="pb-col-tb-4" data-pb-height="example1">
        <p style="background:red;">Equal Height Column 1</p>
    </div>
    <div class="pb-col-tb-4" data-pb-height="example1">
        <p style="background:yellow;">I think this should be a huge sentence with lots of verbs and nouns and still be equal in height.</p>
    </div>
    <div class="pb-col-tb-4" data-pb-height="example1">
        <p style="background:yellow;">Can this column be even longer??? I don't even know what to type here. Maybe some lorem ipsum? Blah, I think you get the point!</p>
    </div>
