(function () {
    'use strict';
    agGrid.LicenseManager.setLicenseKey('');
    agGrid.initialiseAgGridWithAngular1(angular);
    var app = angular.module('gridApp', ['ui.router', 'agGrid']);
    app.controller('homeCtrl', function ($scope) {
        $scope.test = 'angularjs环境部署成功';
        $scope.gridOptions = {
            columnDefs: [
                {
                    headerName: 'Name',
                    field: 'name',
                    // width:250,
                    // minWidth: 300,       // 最小宽度，多数情况是在自适应时，设置使用
                    // maxWidth: 300        // 最大宽度，多数情况是在自适应时，设置使用
                    // cellRenderer: function (params) { },
                    cellClass: '',
                    cellStyle: {
                        //这列的css
                    },
                    suppressSizeToFit: true,    // 设置为true,则开启宽度自适应时这一栏宽度固定，否则，会按照各个栏的宽度比例自适应
                    suppressSorting: true,
                    suppressMenu: false,
                    hide: false,
                    editable: true, // 是否可编辑
                    sortable: true,
                    resizable: true
                },
                { headerName: 'Sex', field: 'sex' },
                { headerName: 'Age', field: 'age' }
            ],
            rowData: [
                { name: 'ZhangSan', sex: 'Male', age: '100' },
                { name: 'LiSi', sex: 'Female', age: '5' },
                { name: 'WangWu', sex: 'Male', age: '50' },
                { name: 'XiaoFeng', sex: 'Male', age: '50' },
                { name: 'DaWei', sex: 'Male', age: '80' },
                { name: 'WangBingLuo', sex: 'Male', age: '10' },
                { name: 'DengLiwe', sex: 'Male', age: '30' },
                { name: 'XieMaoKuo1', sex: 'Male', age: '90' },
                { name: 'XieMaoKuo2', sex: 'Male', age: '90' },
                { name: 'XieMaoKuo3', sex: 'Male', age: '90' },
                { name: 'XieMaoKuo4', sex: 'Male', age: '90' },
                { name: 'XieMaoKuo5', sex: 'Male', age: '90' },
                { name: 'XieMaoKuo6', sex: 'Male', age: '90' },
                { name: 'XieMaoKuo7', sex: 'Male', age: '90' },
                { name: 'XieMaoKuo8', sex: 'Male', age: '90' },
                { name: 'XieMaoKuo9', sex: 'Male', age: '90' }
            ],
            enableFilter: true,
            rowSelection: 'multiple',  // 不设置此参数，则row不能被点击选中
            //suppressRowClickSelection: true,// 已设置上个参数，此参数也可达到同样效果，但多用于含有checkbox的点击
            rowDeselection: true,
            // defaultColGroupDef={} // 默认列组定义
            enableColResize: true, // 允许拖动修改列宽
            suppressAutoSize: true, // 列的自动调整
            // suppressMovableColumns // 禁止列拖动移动，固定列的位置
            // suppressFieldDontNotation // 如果为true，则address.firstline字段名称中的点（例如）不被视为深引用。如果您愿意，可以在字段名称中使用点。
            // unSortIcon // todo 设置为true以显示“无排序”图标
            suppressMenuHide: true, //  设置为true以始终显示列菜单按钮，而不是仅在鼠标位于列标题上时显示。
            // autoGroupColumnDef // todo 如果您对默认值不满意，则允许指定组“自动列”。如果分组，则此列def包含在网格中的第一列定义中。如果不进行分组，则不包括此列。
            // suppressSetColumnStateEvents // todo 设置为true以禁止在调用columnApi.setColumnState(state)和 columnApi.resetColumnState()调用时引发的列事件。
            // quickFilterText // 使用此文本过滤行作为快速过滤器。

            enableSorting: true, // 允许排序
            // enableFilter: true, // 允许筛选 加上报错 不知道是不是版权的原因
            // showToolPanel
            // rowSelection: 'multiple', // 支持多选multiple  支持shift连续多选和ctrl不连续多选
            // rowMultiSelectWithClick // 允许单击选择多行
            // suppressRowClickSelection // 如果为true， 则单击行时不会发生行选择。当您想要专门选择复选框时使用。
            // suppressCellSelection // 如果为true，则不能选择单元格。这意味着当您单击它们时，单元格不会获得键盘焦点。
            // enableRangeSelection // 设置为true以启用范围选择。
            // rowDragManaged: true, // 设置为true以启用托管行拖动。启动分页、排序、过滤之后无效
            // suppressRowDrag // 设置为true以禁止行拖动。
            // singleClickEdit // 设置为true以启用单元格的单击编辑，只需单击即可开始编辑。
            // suppressClickEdit // 设置为true，以便单击或双击都不会开始编辑。请参阅单击，双击，无单击编辑
            // enableGroupEdit // 设置为true以启用组编辑，否则默认情况下无法编辑行组。
            // editType='fullRow' // 设置为“fullRow”以启用“ 完整行编辑”。否则留空以一次编辑一个单元格。
            enableCellChangeFlash: true, // 设置为true以使数据更改后单元格闪烁。请参阅闪烁数据更改。
            stopEditingWhenGridLosesFocus: true, // 将此设置为true可 在网格失去焦点时停止单元格编辑。默认情况下，网格会一直编辑，直到焦点转到另一个单元格。仅适用于内联（非弹出）编辑器。
            // enterMovesDown enterMovesDownAfterEdit // 将两个属性都设置为true以使Enter键具有Excel样式行为，即输入键向下移动。
            // headerHeight // 包含列标签标题的行的高度。如果未指定，则默认值为25px。请参阅标题高度示例。
            // groupHeaderHeight // 包含标题列组的行的高度。如果未指定，则使用headerHeight。请参阅标题高度示例。
            // floatingFiltersHeight //包含浮动过滤器的行的高度。如果未指定，则默认值为20px。请参阅标题高度示例。
            // pivotHeaderHeight // 在枢轴模式下包含列的行的高度。如果未指定，则使用headerHeight。请参阅标题高度示例。
            // pivotGroupHeaderHeight // 处于透视模式时包含标题列组的行的高度。如果未指定，则使用groupHeaderHeight。请参阅标题高度示例。
            // 行分组和透视
            // 数据和行模型
            // 滚动
            // 分页
            pagination: false, //  分页已启用。
            // paginationPageSize ,// 数。每页加载多少行。默认值= 100.如果paginationAutoPageSize 指定，则忽略此属性。请参阅自定义分页示例。
            paginationAutoPageSize: true, // True - 每页加载的行数由ag-Grid自动调整，因此每个页面显示足够的行以填充为网格指定的区域。
            // suppressPaginationPanel // True - 开箱即用的ag-Grid导航控件是隐藏的。如果pagination=true您想要提供自己的分页控件，这将非常有用 。 False（默认） - 当pagination=true它自动在底部显示必要的控件，以便用户可以浏览不同的页面。请参见示例自定义分页控件。
            /* 行块加载：无限和企业行模型 */
            /* 行模型：视口 */
            /* 全宽渲染器 */
            /* 大师细节 */
            /* 渲染和造型 */
            // rowHeight的	// 默认行高度（以像素为单位）。默认值为25像素。
            animateRows: true, // 设置为true以启用行动画。
            // rowStyle	给出特定行的样式。请参见行样式。
            // rowClass	给出特定行的类。请参阅行类。
            // rowClassRules	可以应用于包含某些CSS类的规则。请参阅行类规则。
            // excelStyles	导出到Excel时要使用的Excel样式列表
            // scrollbarwidth  设定	告诉网格滚动条在网格宽度计算的计算中使用的宽度。仅在使用非标准浏览器提供的滚动条时设置，因此网格可以在其计算中使用非标准大小。
            // suppressRowHoverHighlight	设置为true以通过添加ag-row-hoverCSS类不突出显示行。
            /* 国际化 */
            // localeText，localeTextFunc	您可以通过提供a localeText或a 来更改分页面板和默认过滤器中的文本localeTextFunc（请参阅下文）。见国际化。
            /* 叠加层 loadding */
            overlayLoadingTemplate: '<span class="ag-overlay - loading - center">数据加载中...</span>',
            overlayNoRowsTemplate: '<span style=\'padding: 10px; border: 1px solid #999999; background: lightgoldenrodyellow;\'>数据为空</span>',
            /* 其他 */
            defaultExportParams: true, // 用于导出到csv或 excel的默认配置对象
            enableCellExpressions: true, // 设置为true以允许单元格表达式。
            // ensureDomOrder	// 如果为true，则dom中行和列的顺序与屏幕上的顺序一致。请参阅辅助功能 - 行和列顺序。
            suppressDragLeaveHidesColumns: true,  // 如果为true，则将列拖出网格（例如，拖到组区域）时，不会隐藏该列。
            // suppressCopyRowsToClipboard	// 设置为true以仅具有范围选择，而不是行选择，复制到 剪贴板。
            // clipboardDeliminator	// 指定在复制到剪贴板时使用的分隔符
            suppressFocusAfterRefresh: true,	// 设置为true以在刷新后不将焦点设置回网格。这可以避免您希望将注意力集中在浏览器的另一部分上的问题。
            // suppressTabbing // 设置为true以删除网格标签功能。如果要以不同于网格提供的方式管理选项卡，请使用此选项。
            // suppressContextMenu // 设置为true表示不显示上下文菜单。如果您不想使用默认的“右键单击”上下文菜单，请使用此选项。
            allowContextMenuWithControlKey: true, // 允许上下文菜单显示，即使在Ctrl键被按下。
            statusBar: {
                statusPanels: [
                    { statusPanel: 'statusBarComponent' },
                    {
                        statusPanel: 'agAggregationComponent',
                        statusPanelParams: {
                            aggFuncs: ['count', 'sum']
                        }
                    }
                ]
            }
        };
    });
})();
