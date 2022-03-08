import './lego.css';

export const Lego = ({...props}) => <div {...props}>
    <div className="minifigure">
        <div className="head">
            <div className="faces-wrap">
                <div id="faces" className="faces">
                    <div className="face classNameic">
                        <div className="eye right"></div>
                        <div className="eye left"></div>
                        <div className="mouth"></div>
                    </div>

                    <div className="face smile">
                        <div className="eye right">
                            <div className="brow"></div>
                        </div>
                        <div className="eye left">
                            <div className="brow"></div>
                        </div>
                        <div className="mouth"></div>
                    </div>

                    <div className="face large-smile">
                        <div className="eye right">
                            <div className="brow"></div>
                        </div>
                        <div className="eye left">
                            <div className="brow"></div>
                        </div>
                        <div className="mouth"></div>
                    </div>

                    <div className="face worried">
                        <div className="eye right">
                            <div className="brow"></div>
                        </div>
                        <div className="eye left">
                            <div className="brow"></div>
                        </div>
                        <div className="mouth"></div>
                    </div>

                    <div className="face frown">
                        <div className="eye right">
                            <div className="brow"></div>
                        </div>
                        <div className="eye left">
                            <div className="brow"></div>
                        </div>
                        <div className="mouth"></div>
                    </div>

                    <div className="face surprised">
                        <div className="eye right">
                            <div className="brow"></div>
                        </div>
                        <div className="eye left">
                            <div className="brow"></div>
                        </div>
                        <div className="mouth"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="upper-body">
            <div className="torso"></div>
            <div className="arm right">
                <div className="hand right"></div>
            </div>
            <div className="arm left">
                <div className="hand left"></div>
            </div>
        </div>
        <div className="lower-body">
            <div className="waist"></div>
            <div className="crotch"></div>
            <div className="leg right"></div>
            <div className="leg left"></div>
        </div>
    </div>

</div>

export default Lego