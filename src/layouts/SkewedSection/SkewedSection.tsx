import React from 'react';

export default function SkewedBackgroundSection() {
    return (
        <div className="relative p-6">
            <div id="skewed-section-1" className="relative overflow-hidden transform -skew-y-3" style={{
                background: 'radial-gradient(52.49% 6419.93% at 51.89% 100%, #525AA0 0%, rgba(162, 133, 208, 0) 100%)',
                height: '15px'
            }}>
                <div className="relative skew-y-3 py-8 px-4">
                    {/* Empty div with skewed background */}
                </div>
            </div>
            <div className="h-2 bg-white"></div> {/* Gap between the divs */}
            <div id="skewed-section-2" className="relative overflow-hidden transform -skew-y-3" style={{
                background: 'radial-gradient(52.49% 6419.93% at 51.89% 100%, #525AA0 0%, rgba(162, 133, 208, 0) 100%)',
                height: '10px'
            }}>
                <div className="relative skew-y-3 py-8 px-4">
                    {/* Empty div with skewed background */}
                </div>
            </div>
            <div className="h-2 bg-white"></div> {/* Gap between the divs */}
            <div id="skewed-section-3" className="relative overflow-hidden transform -skew-y-3" style={{
                background: 'radial-gradient(52.49% 6419.93% at 51.89% 100%, #525AA0 0%, rgba(162, 133, 208, 0) 100%)',
                height: '5px'
            }}>
                <div className="relative skew-y-3 py-8 px-4">
                    {/* Empty div with skewed background */}
                </div>
            </div>
            <div className="h-2 bg-white"></div> {/* Gap between the divs */}
            <div id="skewed-section-4" className="relative overflow-hidden transform -skew-y-3" style={{
                background: 'radial-gradient(52.49% 6419.93% at 51.89% 100%, #525AA0 0%, rgba(162, 133, 208, 0) 100%)',
                height: '4px'
            }}>
                <div className="relative skew-y-3 py-8 px-4">
                    {/* Empty div with skewed background */}
                </div>
            </div>
            <div className="h-2 bg-white"></div> {/* Gap between the divs */}
            <div id="skewed-section-5" className="relative overflow-hidden transform -skew-y-3" style={{
                background: 'radial-gradient(52.49% 6419.93% at 51.89% 100%, #525AA0 0%, rgba(162, 133, 208, 0) 100%)',
                height: '3px'
            }}>
                <div className="relative skew-y-3 py-8 px-4">
                    {/* Empty div with skewed background */}
                </div>
            </div>
        </div>
    );
}
