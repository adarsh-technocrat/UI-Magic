import React, { useState } from 'react';
import { Badge } from '../../../components/ui/badge';

function SelectUIPreset() {
  const [selectedTag, setSelectedTag] = useState('E-commerce');

  const listOfTags = ['E-commerce', 'Marketplace', 'Social Networking', 'Education'];

  const handleTagSelection = (currentTag: any) => {
    setSelectedTag(currentTag);
    console.log(currentTag);
  };

  return (
    <div className="m-4">
      <text className="text-base font-medium">Select UI Preset</text>
      <div id="scroll" className="flex flex-wrap pt-2">
        {listOfTags.map((tag, idx) => (
          <Badge
            variant={tag === selectedTag ? 'destructive' : 'default'}
            className={`cursor-pointer mr-2 mb-2`}
            onClick={() => {
              handleTagSelection(tag);
            }}
            key={idx}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default SelectUIPreset;
