
lookup.hnlists-firefox.zip := 2
lookup.hnlists-chrome.zip := 3

hnlists-firefox.zip: *.js *.png
	MANIFEST=$$(jq -M '. += {"manifest_version": $(lookup.$@)}' < manifest.template.json) && \
	echo $$MANIFEST > manifest.json && \
	zip $@ $^ manifest.json

.PHONY: clean
clean:
	-rm -rf *.zip manifest.json hnlists-firefox hnlists-chrome