<p align="center">
  <a href="https://w3.org/wot">
    <img alt="Web of Things Homepage" src="https://www.w3.org/WoT/IG/wiki/images/8/8f/WOT-hz.svg" width="300" />
  </a>
</p>

<p align="center">
  <a href="https://w3c.social/@wot">
    <img alt="Follow on Mastodon" src="https://img.shields.io/mastodon/follow/111609289932468076?domain=https%3A%2F%2Fw3c.social"></a>
  <a href="https://twitter.com/W3C_WoT">
    <img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/W3C_WoT"></a>
  <a href="https://stackoverflow.com/questions/tagged/web-of-things">
    <img alt="Stack Exchange questions" src="https://img.shields.io/stackexchange/stackoverflow/t/web-of-things?style=plastic"></a>
</p>

<p align="center">
  <a href="https://w3c.github.io/wot-binding-registry/">
    <img alt="Latest Editor's Draft" src="https://img.shields.io/badge/Editor's_Draft-Latest-fe914a"></a>
</p>

# Web of Things (WoT) Binding Registry

General information about the Web of Things can be found at <https://www.w3.org/WoT/>.

---

The Web of Things (WoT) Binding Registry defines a registry of WoT bindings that make it possible to have a record of
the different bindings. Additionally, it sets the rules that govern this registry to guarantee a quality standard, long
lifecycle and ease of use for the developers.

## Logistics

- Call information: We use the W3C Calendar. You can find the next WoT TD/Binding Templates calls at
  <https://www.w3.org/groups/wg/wot/calendar>. 
- Wiki (contains agenda): <https://www.w3.org/WoT/IG/wiki/WG_WoT_Thing_Description_WebConf>
- [Contribution rules](./CONTRIBUTING.md)

## Publications

- [Latest Editor's Draft](https://w3c.github.io/wot-binding-registry/) (syncs to this repository's main branch)

## Instructions for Editors and Contributors

If you have followed the [Contribution rules](./CONTRIBUTING.md) and want to contribute, please follow the instructions
below.

## Working on the Registry Document

You can make changes to the registry mechanism by making Pull Requests to the [index.html](./index.html) document. Make
sure to run `npm install` and then before doing the Pull Request, run `npm run format` so that the document maintains a
consistent look and the Pull Requests are easier to review as they will not contain any whitespace or similar formatting
changes.

## Working on the Bindings

Any change to a binding is a change to a registry entry. Thus, all changes need to follow the rules set in the registry
definition.
