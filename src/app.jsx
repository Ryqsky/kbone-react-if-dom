import React, {useState} from 'react'

const App = (props, store) => {
    const [checked, setChecked] = useState(false)
    // 点击切换状态后，整个开发者工具会卡顿，界面无响应，控制台 console 输出也没响应
    // 当多嵌套一个 div 就不会出现这个问题
    // 或者在条件判断另一个元素多加一层 div 也不会出现这个问题

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        {
                                            checked ? (
                                                    <div>
                                                        <div>已选中</div>
                                                    </div>) :
                                                <div/>
                                        }
                                    </div>

                                    <div
                                        onClick={() => setChecked(!checked)}>点击切换状态
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
