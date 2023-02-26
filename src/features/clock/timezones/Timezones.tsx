import TimezoneSelect, {ITimezone, ITimezoneOption} from "react-timezone-select";
import {FC} from "react";

type TimezonesType = {
    timezone: ITimezone
    onChange: (timezone: ITimezoneOption) => void
}

export const Timezones:FC<TimezonesType> = ({timezone, onChange}) => {
    return (
                <TimezoneSelect
                    value={timezone}
                    onChange={onChange}
                />

    )
}